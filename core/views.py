import json

import django
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

from .models import ContactMessage


def hello(request):
    """前台连通性检测接口：返回后端基础信息。"""
    return JsonResponse({
        'message': 'Hello from Django! 前后端连接正常。',
        'django_version': django.get_version(),
        'server_time': timezone.localtime().strftime('%Y-%m-%d %H:%M:%S'),
    })


def frontend_index(request):
    """单端口模式：由 Django 托管已构建的 Vue 前台（含 SPA 路由兜底）。"""
    index_path = settings.FRONTEND_DIST_DIR / 'index.html'
    if not index_path.is_file():
        return HttpResponse(
            '前端尚未构建：请先在 frontend 目录执行 npm run build',
            status=503,
            content_type='text/plain; charset=utf-8',
        )
    return HttpResponse(
        index_path.read_text(encoding='utf-8'),
        content_type='text/html; charset=utf-8',
    )


@csrf_exempt
def contact_submit(request):
    """接收前台联系/定制表单提交，保存留言记录。"""
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '仅支持 POST 请求'}, status=405)

    try:
        data = json.loads(request.body or b'{}')
    except json.JSONDecodeError:
        return JsonResponse({'ok': False, 'error': '请求格式错误'}, status=400)

    name = str(data.get('name', '')).strip()
    phone = str(data.get('phone', '')).strip()
    if not name or not phone:
        return JsonResponse({'ok': False, 'error': '联系人与联系电话为必填项'}, status=400)

    ContactMessage.objects.create(
        name=name,
        phone=phone,
        company=str(data.get('company', '')).strip(),
        project_type=str(data.get('project_type', '')).strip(),
        quantity=str(data.get('quantity', '')).strip(),
        city=str(data.get('city', '')).strip(),
        budget=str(data.get('budget', '')).strip(),
        message=str(data.get('message', '')).strip(),
    )
    return JsonResponse({'ok': True, 'message': '提交成功'})
