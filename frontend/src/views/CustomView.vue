<script setup lang="ts">
import { reactive, shallowRef, useTemplateRef } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import PageHero from '@/components/PageHero.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import {
  contact,
  customCases,
  customFaq,
  customOptions,
  customPromises,
  customSteps,
} from '@/data/site'

interface CustomForm {
  name: string
  phone: string
  type: string
  message: string
}

const form = reactive<CustomForm>({ name: '', phone: '', type: '', message: '' })
const formRef = useTemplateRef<FormInstance>('formRef')
const submitting = shallowRef(false)

const rules: FormRules = {
  name: [{ required: true, message: '请填写您的称呼', trigger: 'blur' }],
  phone: [
    { required: true, message: '请填写联系电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请填写11位手机号', trigger: 'blur' },
  ],
  type: [{ required: true, message: '请选择需求类型', trigger: 'change' }],
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
        project_type: form.type,
        message: form.message,
      }),
    })
    const data = (await response.json()) as { ok: boolean; error?: string }
    if (!response.ok || !data.ok) {
      throw new Error(data.error ?? '提交失败，请稍后重试')
    }
    ElMessage.success('已收到您的定制需求，我们将在1个工作日内与您联系。')
    formRef.value.resetFields()
  } catch (err) {
    ElMessage.error(err instanceof Error ? err.message : '网络异常，请稍后重试')
  } finally {
    submitting.value = false
  }
}

const heroImage =
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1800&q=80'
</script>

<template>
  <div class="custom">
    <PageHero
      kicker="高端定制 · BESPOKE"
      title="高端定制"
      subtitle="从一张图纸到一间府邸，源木为酒店、设计师与个人居所提供全流程定制服务。"
      :image="heroImage"
    />

    <section class="section section--sand">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="定制流程 · PROCESS"
          title="五步，让想法落地"
          description="每个环节都可确认、可追溯，您始终掌握主动权。"
        />

        <div class="custom__steps">
          <div v-for="step in customSteps" :key="step.step" class="custom__step">
            <span class="custom__step-num">{{ step.step }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="定制案例 · CASES"
          title="交付过的项目，胜过千言万语"
          description="酒店、私宅与设计师联名的真实项目缩影。"
        />

        <div class="custom__cases">
          <article v-for="item in customCases" :key="item.title" class="custom__case">
            <div class="custom__case-media">
              <el-image
                class="custom__case-image"
                :src="item.image"
                :alt="item.title"
                :preview-src-list="[item.image]"
                preview-teleported
                hide-on-click-modal
                fit="cover"
                loading="lazy"
              />
              <span>{{ item.tag }}</span>
            </div>
            <div class="custom__case-body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="可选配置 · OPTIONS"
          title="材质与细节，由您决定"
          description="从原木到五金，每一项都提供实物样块与多种选择。"
        />

        <div class="custom__options">
          <div v-for="option in customOptions" :key="option.title" class="custom__option">
            <h3>{{ option.title }}</h3>
            <p>{{ option.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="常见问题 · FAQ"
          title="定制前，先看这里"
        />

        <div class="custom__faq">
          <div v-for="item in customFaq" :key="item.q" class="custom__faq-item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="定制保障 · GUARANTEE"
          title="把承诺写进合同"
        />

        <div class="custom__promises">
          <div v-for="item in customPromises" :key="item.title" class="custom__promise">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container custom__form-wrap">
        <div class="custom__form-card">
          <SectionTitle
            kicker="提交需求 · ENQUIRY"
            title="告诉我们您的想法"
            description="留下联系方式与需求描述，专属顾问将在1个工作日内与您沟通。"
          />

          <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
            <el-form-item label="您的称呼" prop="name">
              <el-input v-model="form.name" placeholder="怎么称呼您" />
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="form.phone" placeholder="方便顾问与您联系" />
            </el-form-item>
            <el-form-item label="需求类型" prop="type">
              <el-select v-model="form.type" placeholder="请选择需求类型" style="width: 100%">
                <el-option label="住宅定制" value="住宅定制" />
                <el-option label="酒店 / 商业工程" value="酒店 / 商业工程" />
                <el-option label="设计师合作" value="设计师合作" />
                <el-option label="OEM / ODM 代工" value="OEM / ODM 代工" />
              </el-select>
            </el-form-item>
            <el-form-item label="项目描述" prop="message">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="4"
                placeholder="空间用途、风格偏好、尺寸与预算（选填）"
              />
            </el-form-item>

            <button
              type="button"
              class="btn btn--solid btn--block"
              :disabled="submitting"
              @click="submitForm"
            >
              {{ submitting ? '提交中…' : '提交定制需求' }}
            </button>
          </el-form>
        </div>

        <aside class="custom__aside">
          <h3>也可以直接联系我们</h3>
          <p><span>客服热线</span>{{ contact.phone }}</p>
          <p><span>商务邮箱</span>{{ contact.email }}</p>
          <p><span>工厂地址</span>{{ contact.address }}</p>
          <p class="custom__aside-note">
            到厂沟通更高效：建议提前一天预约，可安排专人带看车间与展厅。
          </p>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.custom__steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.custom__step {
  padding-top: 1.4rem;
  border-top: 1px solid var(--gold);

  .custom__step-num {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--gold);
  }

  h3 {
    margin: 0.7rem 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.18rem;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.custom__options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  margin-top: 3.2rem;
}

.custom__option {
  padding: 2.1rem 1.7rem;
  background: var(--sand);
  border: 1px solid var(--hairline);

  h3 {
    margin: 0 0 0.8rem;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.1em;
    color: var(--gold-deep);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.custom__cases {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  margin-top: 3.2rem;
}

.custom__case {
  background: var(--sand);
  border: 1px solid var(--hairline);

  &:hover {
    border-color: var(--gold);
  }
}

.custom__case-media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--sand-deep);

  .el-image {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.35s ease;
  }

  &:hover .el-image {
    opacity: 0.88;
  }

  span {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.25rem 0.85rem;
    background: rgba(255, 255, 255, 0.92);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    color: var(--ink-mute);
  }
}

.custom__case-body {
  padding: 1.4rem 1.5rem 1.6rem;

  h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: 1.12rem;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.custom__faq {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.custom__faq-item {
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

.custom__promises {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.custom__promise {
  padding: 1.6rem 0 0;
  border-top: 1px solid var(--gold);

  h3 {
    margin: 0 0 0.7rem;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.1em;
    color: var(--gold-deep);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.custom__form-wrap {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 3rem;
  align-items: start;
}

.custom__form-card {
  padding: 3rem;
  background: var(--ivory);
  border: 1px solid var(--hairline);
}

.custom__aside {
  padding: 3rem;
  background: var(--ink);
  color: var(--ivory);

  h3 {
    margin: 0 0 1.8rem;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  p {
    margin: 0 0 1.3rem;
    font-size: 0.92rem;
    color: rgba(251, 248, 242, 0.78);
  }

  p span {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    color: #d3b98a;
  }

  .custom__aside-note {
    margin-top: 2rem;
    padding-top: 1.4rem;
    border-top: 1px solid var(--hairline-light);
    line-height: 1.9;
    color: rgba(251, 248, 242, 0.55);
  }
}

@media (max-width: 960px) {
  .custom__steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .custom__options,
  .custom__cases {
    grid-template-columns: repeat(2, 1fr);
  }

  .custom__promises {
    grid-template-columns: repeat(2, 1fr);
  }

  .custom__form-wrap {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .custom__steps,
  .custom__options,
  .custom__cases,
  .custom__faq,
  .custom__promises {
    grid-template-columns: 1fr;
  }

  .custom__form-card,
  .custom__aside {
    padding: 2rem 1.5rem;
  }
}
</style>
