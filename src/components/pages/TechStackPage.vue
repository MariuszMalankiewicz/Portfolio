<script setup>
import TechCard from '../common/TechCard.vue';

import { DeHtml5Original } from '@kalimahapps/vue-icons';
import { DeCss3Original } from '@kalimahapps/vue-icons';
import { DeJavascriptOriginal } from '@kalimahapps/vue-icons';
import { DeBootstrapOriginalWordmark } from '@kalimahapps/vue-icons';
import { BxTailwindCss } from '@kalimahapps/vue-icons';
import { DeVuejsOriginal } from '@kalimahapps/vue-icons';
import { CoBrandJson } from '@kalimahapps/vue-icons';
import { DePhpOriginal } from '@kalimahapps/vue-icons';
import { CoBrandLaravel } from '@kalimahapps/vue-icons';
import { DeMysqlOriginalWordmark } from '@kalimahapps/vue-icons';
import { BsFiletypeSql } from '@kalimahapps/vue-icons';
import { DeSqliteOriginal } from '@kalimahapps/vue-icons';
import { SiPostman } from '@kalimahapps/vue-icons';
import { BxVisualStudio } from '@kalimahapps/vue-icons';
import { AiFigshare } from '@kalimahapps/vue-icons';
import { VsFileTypePhpunit } from '@kalimahapps/vue-icons';
import { BsWordpress } from '@kalimahapps/vue-icons';
import { AnFilledFileMarkdown } from '@kalimahapps/vue-icons';
</script>

<template>
    <section class="px-4 mt-[80px] font-Montserrat mb-12">
        <h1 class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue">Tech Stack</h1>
        <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-12 mt-12 2xl:mt-24 text-[40px]">
            <TechCard><DeHtml5Original></DeHtml5Original></TechCard>
            <TechCard><DeCss3Original></DeCss3Original></TechCard>
            <TechCard><DeJavascriptOriginal></DeJavascriptOriginal></TechCard>
            <TechCard><DeBootstrapOriginalWordmark></DeBootstrapOriginalWordmark></TechCard>
            <TechCard><BxTailwindCss class="text-blue"></BxTailwindCss></TechCard>
            <TechCard><DeVuejsOriginal></DeVuejsOriginal></TechCard>
            <TechCard><DePhpOriginal></DePhpOriginal></TechCard>
            <TechCard><CoBrandLaravel class="text-red-500"></CoBrandLaravel></TechCard>
            <TechCard><DeMysqlOriginalWordmark></DeMysqlOriginalWordmark></TechCard>
            <TechCard><BsFiletypeSql class="text-sky-500"></BsFiletypeSql></TechCard>
            <TechCard><DeSqliteOriginal></DeSqliteOriginal></TechCard>
            <TechCard><CoBrandJson class="text-gray-700"></CoBrandJson></TechCard>
            <TechCard><SiPostman class="text-orange-500"></SiPostman></TechCard>
            <TechCard><BxVisualStudio class="text-blue"></BxVisualStudio></TechCard>
            <TechCard><AiFigshare class="text-blue"></AiFigshare></TechCard>
            <TechCard><VsFileTypePhpunit></VsFileTypePhpunit></TechCard>
            <TechCard><BsWordpress></BsWordpress></TechCard>
            <TechCard><AnFilledFileMarkdown></AnFilledFileMarkdown></TechCard>
        </div>
    </section>
</template>