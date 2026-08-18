<script setup lang="ts">
import { reactive, shallowRef, useTemplateRef } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import PageHero from '@/components/PageHero.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import {
  budgetOptions,
  contact,
  contactFaq,
  contactSteps,
  projectTypes,
  quantityOptions,
} from '@/data/site'

interface ContactForm {
  name: string
  phone: string
  company: string
  projectType: string
  quantity: string
  city: string
  budget: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  phone: '',
  company: '',
  projectType: '',
  quantity: '',
  city: '',
  budget: '',
  message: '',
})

const formRef = useTemplateRef<FormInstance>('formRef')
const submitting = shallowRef(false)

const rules: FormRules = {
  name: [{ required: true, message: '请填写联系人姓名', trigger: 'blur' }],
  phone: [
    { required: true, message: '请填写联系电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请填写11位手机号', trigger: 'blur' },
  ],
  message: [{ required: true, message: '请填写需求说明', trigger: 'blur' }],
}

async function submitForm() {
  if (!formRef.value) return
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return
  submitting.value = true
  try {
    const base = import.meta.env.VITE_API_BASE ?? '/api'
    const response = await fetch(`${base}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        company: form.company,
        project_type: form.projectType,
        quantity: form.quantity,
        city: form.city,
        budget: form.budget,
        message: form.message,
      }),
    })
    const data = (await response.json()) as { ok: boolean; error?: string }
    if (!response.ok || !data.ok) {
      throw new Error(data.error ?? '提交失败，请稍后重试')
    }
    ElMessage.success('提交成功，我们将在1个工作日内与您联系。')
    formRef.value.resetFields()
  } catch (err) {
    ElMessage.error(err instanceof Error ? err.message : '网络异常，请稍后重试')
  } finally {
    submitting.value = false
  }
}

const contactCards = [
  { title: '工厂地址', value: contact.address, note: '佛山家具产业带 · 距广州南站约30分钟车程' },
  { title: '客服热线', value: contact.phone, note: contact.hours },
  { title: '商务邮箱', value: contact.email, note: '批发 / 工程 / 出口询价' },
  { title: '微信客服', value: contact.wechat, note: '添加好友时备注「官网咨询」' },
]

const cooperation = ['OEM / ODM', '批发经销', '工程集采', '出口贸易']

const heroImage =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80'
</script>

<template>
  <div class="contact">
    <PageHero
      kicker="联系我们 · CONTACT"
      title="联系我们"
      subtitle="商务合作、到厂考察或产品询价，欢迎通过以下方式找到我们。"
      :image="heroImage"
    />

    <section class="section section--ivory">
      <div class="container">
        <div class="contact__cards">
          <div v-for="card in contactCards" :key="card.title" class="contact__card">
            <span class="contact__card-title">{{ card.title }}</span>
            <strong>{{ card.value }}</strong>
            <p>{{ card.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="合作流程 · PROCESS"
          title="四步建立合作"
          description="从第一次咨询到签约交付，流程清晰，节点可控。"
        />

        <div class="contact__steps">
          <div v-for="step in contactSteps" :key="step.step" class="contact__step">
            <span class="contact__step-num">{{ step.step }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container contact__form-wrap">
        <div class="contact__form-card">
          <SectionTitle
            kicker="在线留言 · MESSAGE"
            title="留下您的需求"
            description="填写以下信息，商务顾问会尽快与您联系。"
          />

          <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
            <div class="contact__form-grid">
              <el-form-item label="联系人" prop="name">
                <el-input v-model="form.name" placeholder="怎么称呼您" />
              </el-form-item>
              <el-form-item label="联系电话" prop="phone">
                <el-input v-model="form.phone" placeholder="方便顾问与您联系" />
              </el-form-item>
              <el-form-item label="公司 / 品牌" prop="company">
                <el-input v-model="form.company" placeholder="选填" />
              </el-form-item>
              <el-form-item label="项目类型" prop="projectType">
                <el-select v-model="form.projectType" placeholder="请选择项目类型" style="width: 100%">
                  <el-option v-for="type in projectTypes" :key="type" :label="type" :value="type" />
                </el-select>
              </el-form-item>
              <el-form-item label="预计数量" prop="quantity">
                <el-select v-model="form.quantity" placeholder="请选择预计数量" style="width: 100%">
                  <el-option
                    v-for="option in quantityOptions"
                    :key="option"
                    :label="option"
                    :value="option"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="交付城市" prop="city">
                <el-input v-model="form.city" placeholder="如：上海 / 成都" />
              </el-form-item>
              <el-form-item label="预算区间" prop="budget">
                <el-select v-model="form.budget" placeholder="请选择预算区间" style="width: 100%">
                  <el-option
                    v-for="option in budgetOptions"
                    :key="option"
                    :label="option"
                    :value="option"
                  />
                </el-select>
              </el-form-item>
              <div class="contact__form-hint">
                <p>提交后，商务顾问将在1个工作日内与您联系。</p>
              </div>
            </div>

            <el-form-item label="需求说明" prop="message">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="4"
                placeholder="请描述项目背景、家具品类、风格偏好、预算与期望交期"
              />
            </el-form-item>

            <button
              type="button"
              class="btn btn--solid btn--block"
              :disabled="submitting"
              @click="submitForm"
            >
              {{ submitting ? '提交中…' : '提交表单' }}
            </button>
          </el-form>
        </div>

        <aside class="contact__aside">
          <h3>到厂指引</h3>
          <div class="contact__map">
            <span class="seal">木</span>
            <strong>{{ contact.address }}</strong>
            <p>地图组件可在此接入（高德 / 百度 / Google Maps）</p>
          </div>
          <ul class="contact__route">
            <li><span>高铁</span>广州南站下车，打车约30分钟直达</li>
            <li><span>自驾</span>导航「源木家具工厂」，园区内提供停车位</li>
            <li><span>预约</span>建议提前半天预约参观，安排专人接待</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle align="center" kicker="常见问题 · FAQ" title="咨询前，先看这里" />

        <div class="contact__faq">
          <div v-for="item in contactFaq" :key="item.q" class="contact__faq-item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ink">
      <div class="container">
        <SectionTitle
          align="center"
          tone="dark"
          kicker="合作方式 · PARTNERSHIP"
          title="与源木合作"
          description="无论订单大小，我们都以同一套制造标准对待。"
        />

        <div class="contact__cooperation">
          <span v-for="item in cooperation" :key="item" class="contact__coop-chip">
            {{ item }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.contact__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
}

.contact__card {
  padding: 2.2rem 1.7rem;
  background: var(--sand);
  border: 1px solid var(--hairline);

  .contact__card-title {
    display: block;
    margin-bottom: 0.9rem;
    font-size: 0.75rem;
    letter-spacing: 0.32em;
    color: var(--gold-deep);
  }

  strong {
    display: block;
    margin-bottom: 0.7rem;
    font-family: var(--font-serif);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--ink);
  }

  p {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
}

.contact__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.contact__step {
  padding-top: 1.4rem;
  border-top: 1px solid var(--gold);

  .contact__step-num {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--gold);
  }

  h3 {
    margin: 0.7rem 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.contact__form-wrap {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 3rem;
  align-items: start;
}

.contact__form-card {
  padding: 3rem;
  background: var(--sand);
  border: 1px solid var(--hairline);
}

.contact__form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
}

.contact__form-hint {
  align-self: end;
  margin-bottom: 1.75rem;
  padding: 1rem 1.2rem;
  background: var(--sand-deep);
  border-left: 2px solid var(--gold);

  p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
}

.contact__aside {
  padding: 3rem;
  background: var(--ink);
  color: var(--ivory);

  h3 {
    margin: 0 0 1.5rem;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
}

.contact__map {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  min-height: 15rem;
  padding: 2rem;
  text-align: center;
  background: rgba(251, 248, 242, 0.04);
  border: 1px solid var(--hairline-light);

  strong {
    font-family: var(--font-serif);
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--ivory);
  }

  p {
    margin: 0;
    font-size: 0.78rem;
    color: rgba(251, 248, 242, 0.5);
  }
}

.contact__route {
  margin: 1.8rem 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 1.15rem;
    padding-left: 5rem;
    font-size: 0.88rem;
    line-height: 1.8;
    color: rgba(251, 248, 242, 0.72);
  }

  li span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    color: #d3b98a;
  }
}

.contact__faq {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.contact__faq-item {
  padding: 1.6rem 1.7rem;
  background: var(--sand);
  border: 1px solid var(--hairline);
  border-left: 2px solid var(--gold);

  h3 {
    margin: 0 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.05rem;
    letter-spacing: 0.06em;
    color: var(--ink);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.contact__cooperation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
}

.contact__coop-chip {
  padding: 0.7rem 1.8rem;
  border: 1px solid var(--hairline-light);
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: rgba(251, 248, 242, 0.85);
}

@media (max-width: 960px) {
  .contact__cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact__steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact__form-wrap {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contact__cards,
  .contact__steps,
  .contact__faq {
    grid-template-columns: 1fr;
  }

  .contact__form-grid {
    grid-template-columns: 1fr;
  }

  .contact__form-card,
  .contact__aside {
    padding: 2rem 1.5rem;
  }
}
</style>
