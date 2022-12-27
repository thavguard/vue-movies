<script setup lang="ts">
import MovieCardResult from "@/components/ui/MovieCardResult/MovieCardResult.vue";
import SearchInput from "@/components/ui/SearchInput/SearchInput.vue";
import { useSearchStore } from "@/store/useSearchStore";
import kinoHdIcon from "@/assets/icons/kino_hd.webp";
import Icon from "@/components/common/Icon/Icon.vue";
const store = useSearchStore();

const onClickSrc = (src: string) => {
  window.open(src);
};
</script>

<template>
  <div class="container">
    <div class="input">
      <SearchInput />
    </div>
    <div class="results">
      <div class="count" v-if="!!store.results.length">
        Найдено: {{ store.results.length }}
      </div>
      <div
        class="result"
        v-for="(item, index) in store.results"
        :key="item.kp_id"
        @click="onClickSrc(item.iframe)"
      >
        <div class="img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="info">
          <div class="info__text">
            <div class="title">{{ item.title }}</div>
            <div class="origTitle">{{ item.originalName }}</div>
            <div class="more_info">
              <div class="more_info--item quality" v-if="!!item.quality">
                {{ item.quality }}
              </div>
              <div class="more_info--item" v-if="!!item.seasonsCount">
                {{ item.seasonsCount }} seasons
              </div>
              <div
                class="more_info--item translation"
                v-if="!!item.translation"
              >
                {{ item.translation }}
              </div>
            </div>
          </div>
          <div class="info__btns">
            <div
              class="info__btns--btn"
              @click="
                onClickSrc(`https://www.kinopoisk.ru/film/${item.kp_id}/`)
              "
            >
              <img :src="kinoHdIcon" alt="" />
            </div>
            <div
              class="info__btns--btn"
              @click="onClickSrc(`https://www.imdb.com/title/${item.imdb_id}/`)"
            >
              <Icon :name="'imdb'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";

.container {
  margin: 130px $pageMargin 0;

  .results {
    .count {
      margin: 12px 0 12px 8px;
      font-size: 16px;

      color: #9aa0a6;
    }
    .result {
      display: flex;
      padding: 16px 8px;

      cursor: pointer;

      transition: background 0.1s ease-in-out;

      border-radius: 4px;

      &:hover {
        background: #121212;
      }

      .img {
        background: $cardSkeletonBg;
      }

      .img,
      img {
        width: 96px;
        height: 144px;
      }

      .info {
        display: flex;
        flex: 1 1 0;
        align-items: center;
        margin-left: 30px;

        &__text {
          margin-right: 30px;

          width: 500px;

          .title {
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            margin-bottom: 4px;
          }

          .origTitle {
            font-size: 16px;
            font-family: "Work Sans", sans-serif;
            line-height: 20px;

            margin-bottom: 10px;

            color: #9aa0a6;
          }

          .more_info {
            display: flex;

            .quality {
              color: #ff8800;
              font-weight: 600;
              font-family: "Unbounded", cursive;
            }

            &--item {
              font-size: 15px;
              &:not(:first-of-type) {
                position: relative;

                margin-left: 8px;
                padding-left: 8px;

                &::before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 50%;
                  left: 0;

                  transform: translateY(-50%);

                  width: 1px;
                  height: 14px;

                  background: #fdfdfd;
                }
              }
            }
          }
        }

        &__btns {
          &--btn {
            transition: transform 0.2s ease-in-out;
            &:hover {
              transform: scale(1.05);
            }

            img,
            svg {
              width: 48px;
              height: 48px;

              border-radius: 8px;
            }

            &:deep(svg) {
              fill: #fdfdfd;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    margin: 107px $pageMarginMobile 0 $pageMarginMobile;

    .results {
      .count {
        margin: 4px 0;

        font-size: 14px;
      }

      .result {
        // padding: 0;

        .info {
          margin-left: 12px;
          &__text {
            width: auto;
          }
        }

        .img,
        img {
          width: 90px;

          height: auto;
        }
      }
    }
  }
}

.translation {
  display: none;
}
</style>
