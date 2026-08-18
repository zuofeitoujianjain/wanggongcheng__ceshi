<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import {
  ecoItems,
  equipment,
  factoryProcess,
  factoryStats,
  qualityItems,
  workshopGallery,
} from '@/data/site'

const certifications = ['FSC 森林认证', 'ISO 9001', 'CE 认证', 'BSCI 社会责任']

const heroImage =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80'
const workshopImage =
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80'
</script>

<template>
  <div class="factory">
    <PageHero
      kicker="走进工厂 · FACTORY"
      title="走进工厂"
      subtitle="一座会呼吸的工厂——看得见的原木、看得见的工序，欢迎随时到厂参观。"
      :image="heroImage"
    />

    <section class="section section--sand">
      <div class="container factory__intro">
        <div class="factory__intro-content">
          <SectionTitle
            kicker="关于工厂 · OUR WORKSHOP"
            title="一座会呼吸的工厂"
            description="源木制造基地占地3.8万㎡，260余名工匠在这里完成从原木到成品的全部工序。中央除尘、恒温干燥、水性涂装，我们让制造过程本身也足够体面。"
          />
          <ul class="factory__intro-list">
            <li><span>中央除尘</span>开料与打磨车间全线除尘，空气达标</li>
            <li><span>恒温干燥</span>自主干燥窑，含水率逐板可控</li>
            <li><span>水性涂装</span>环保车间，成品 VOC 检测达标</li>
            <li><span>打样中心</span>新品与定制先打样，确认后再投产</li>
          </ul>
        </div>
        <div class="factory__intro-media">
          <img :src="workshopImage" alt="源木家具制造车间" loading="lazy" />
          <div class="factory__intro-badge">
            <strong>56国</strong>
            <span>产品出口国家</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="车间实景 · WORKSHOP"
          title="真实车间，看得见"
          description="不设参观禁区，车间就是最好的产品说明书。"
        />

        <div class="factory__gallery">
          <figure v-for="item in workshopGallery" :key="item.title" class="factory__gallery-item">
            <el-image
              class="factory__gallery-image"
              :src="item.image"
              :alt="item.title"
              :preview-src-list="[item.image]"
              preview-teleported
              hide-on-click-modal
              fit="cover"
              loading="lazy"
            />
            <figcaption>{{ item.title }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="工艺流程 · PROCESS"
          title="六道工序，一以贯之"
          description="每一件家具都遵循同一套可追溯的制造标准，从原木进厂到成品出库，全程留痕。"
        />

        <div class="factory__process">
          <div v-for="step in factoryProcess" :key="step.step" class="factory__step">
            <span class="factory__step-num">{{ step.step }}</span>
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
          kicker="设备与产线 · EQUIPMENT"
          title="让设备替品质说话"
          description="数控设备保证精度，手工工序保留温度。"
        />

        <div class="factory__equipment">
          <div v-for="item in equipment" :key="item.title" class="factory__equipment-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="品质管控 · QUALITY"
          title="把检验留在出厂之前"
          description="质检不是最后一道工序，而是贯穿制造全程的标准。"
        />

        <div class="factory__quality">
          <div v-for="item in qualityItems" :key="item.title" class="factory__quality-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="环保责任 · SUSTAINABILITY"
          title="对森林负责，对家负责"
          description="可持续不是口号，而是从原料到废料的每一个环节。"
        />

        <div class="factory__eco">
          <div v-for="item in ecoItems" :key="item.title" class="factory__eco-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ink">
      <div class="container">
        <div class="factory__stats">
          <div v-for="stat in factoryStats" :key="stat.label" class="factory__stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="认证与资质 · CERTIFICATION"
          title="国际标准的背后"
          description="每一张证书，都是对出口品质的长期承诺。"
        />

        <div class="factory__certs">
          <span v-for="cert in certifications" :key="cert" class="factory__cert">
            {{ cert }}
          </span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container factory__visit">
        <div class="factory__visit-text">
          <p class="kicker">到厂参观 · VISIT</p>
          <h2>欢迎预约参观车间与展厅</h2>
          <p>提前半天预约，专人带看，现场沟通更高效。</p>
        </div>
        <RouterLink class="btn btn--solid" to="/contact">预约参观</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.factory__intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 5rem;
  align-items: center;
}

.factory__intro-list {
  margin: 2.2rem 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 1.15rem;
    padding-left: 7rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  li span {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 0.2rem;
    font-size: 0.85rem;
    letter-spacing: 0.22em;
    color: var(--ink);
    border-bottom: 1px solid var(--gold);
  }
}

.factory__intro-media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--sand-deep);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.factory__intro-badge {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.1rem 1.5rem;
  background: var(--ivory);
  border: 1px solid var(--gold);

  strong {
    font-family: var(--font-serif);
    font-size: 1.7rem;
    color: var(--gold-deep);
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: var(--text-secondary);
  }
}

.factory__process {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.2rem;
  margin-top: 3.2rem;
}

.factory__step {
  padding-top: 1.4rem;
  border-top: 1px solid var(--gold);

  .factory__step-num {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--gold);
  }

  h3 {
    margin: 0.7rem 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.factory__quality {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  margin-top: 3.2rem;
}

.factory__quality-item {
  padding: 2.1rem 1.7rem;
  background: var(--ivory);
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

.factory__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.factory__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.6rem 0;
  border: 1px solid var(--hairline-light);

  strong {
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 600;
    color: #d3b98a;
  }

  span {
    font-size: 0.8rem;
    letter-spacing: 0.26em;
    color: rgba(251, 248, 242, 0.65);
  }
}

.factory__certs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
}

.factory__cert {
  padding: 0.7rem 1.8rem;
  border: 1px solid var(--gold);
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--gold-deep);
}

.factory__gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.factory__gallery-item {
  margin: 0;

  .el-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    background: var(--sand-deep);
  }

  figcaption {
    margin-top: 0.8rem;
    font-size: 0.85rem;
    letter-spacing: 0.24em;
    color: var(--text-secondary);
  }
}

.factory__equipment {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.factory__equipment-item {
  padding: 1.8rem 1.6rem;
  background: var(--sand);
  border: 1px solid var(--hairline);
  border-top: 2px solid var(--gold);

  h3 {
    margin: 0 0 0.7rem;
    font-family: var(--font-serif);
    font-size: 1.12rem;
    letter-spacing: 0.08em;
    color: var(--gold-deep);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.factory__eco {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.factory__eco-item {
  padding: 2rem 1.7rem;
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

.factory__visit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3.2rem;
  border: 1px solid var(--gold);
  background: var(--sand);

  h2 {
    margin: 0.6rem 0 0.5rem;
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 2.8vw, 2rem);
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
  }
}

@media (max-width: 960px) {
  .factory__intro {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .factory__process {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory__quality {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory__stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory__gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory__equipment,
  .factory__eco {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory__visit {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .factory__process,
  .factory__quality,
  .factory__stats,
  .factory__gallery,
  .factory__equipment,
  .factory__eco {
    grid-template-columns: 1fr;
  }
}
</style>
