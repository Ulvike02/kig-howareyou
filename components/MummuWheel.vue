


<script setup>
  import { arc } from "d3";
  
  defineEmits(["select"]);
  
  const rotate = (deg) => `rotate(${deg})`;
  const translate = (x, y) => `translate(${x} ${y})`;
  
  const sectors = options.map((option, i) => {
    const count = options.length;
    const sector = 180 / count;
    const currentAngle = i * sector;
    // const d = arc()
    //   .padAngle(0)
    //   .cornerRadius(0)
    //   .innerRadius(0)
    //   .outerRadius(100)
    //   .startAngle(deg2rad(currentAngle))
    //   .endAngle(deg2rad(currentAngle + sector))();
    const halfSector = currentAngle + sector / 2;
    const point = polar(halfSector, 200);
    return { ...option, point, halfSector };
  });
  </script>
  <template>
      <svg width="500" height="500" class="block border border-blue-500">
        <g transform="translate(250,250)">
          <g v-for="sector in sectors" @click="$emit('select', sector)">
            <!-- <path :d="sector.d" :fill="sector.fill" opacity="0.5" /> -->
            <circle :cx="sector.point.x / 1.15" :cy="sector.point.y" r="45" :fill="sector.fill" />
            <text
              dominant-baseline="middle"
              text-anchor="middle"
              :x="sector.point.x / 1.15" :y="sector.point.y"
              fill="white"
            >
              {{ sector.title }}
            </text>
          </g>
        </g>
      </svg>
    </div>
  </template>
  