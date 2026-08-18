from django.db import models


class ContactMessage(models.Model):
    """前台联系/定制表单提交的留言记录。"""

    name = models.CharField('联系人', max_length=64)
    phone = models.CharField('联系电话', max_length=32)
    company = models.CharField('公司/品牌', max_length=128, blank=True, default='')
    project_type = models.CharField('项目类型', max_length=64, blank=True, default='')
    quantity = models.CharField('预计数量', max_length=64, blank=True, default='')
    city = models.CharField('交付城市', max_length=64, blank=True, default='')
    budget = models.CharField('预算区间', max_length=64, blank=True, default='')
    message = models.TextField('需求说明', blank=True, default='')
    created_at = models.DateTimeField('提交时间', auto_now_add=True)

    class Meta:
        db_table = 'contract'
        verbose_name = '联系表单'
        verbose_name_plural = '联系表单'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} · {self.phone}'
