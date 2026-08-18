from django.contrib import admin

from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'company', 'project_type', 'quantity', 'city', 'budget', 'created_at')
    list_filter = ('project_type', 'created_at')
    search_fields = ('name', 'phone', 'company', 'city')
    readonly_fields = ('created_at',)
