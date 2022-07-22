<script lang="ts">
  export let placeholder: string;
  export let name: string;
  export let type = 'text';
  export let required = false;
  export let value: string | number ='';
  export let disabled = false;
  export let hidden = false;
  export let min: string | number = '';
  export let step: string | number = '';
  export let max: string | number = '';
  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<div class:hidden class="relative z-0 w-full">
  <input
    use:typeAction
    {min}
    {max}
    {step}
    {disabled}
    bind:value
    {name}
    placeholder=" "
    {required}
    class="bg-clip-text p-(t-3 b-2) block w-full bg-transparent focus: outline-none sibling:(focus:(transform scale-75 translate-y--6 text-opacity-100) not-placeholder-shown:(transform scale-75 translate-y--6 text-opacity-100))" />

  <label
    for={name}
    class="absolute duration-300 top-3 z--1 text-(orange-500 opacity-50) transform-origin-[0%]"
    >{placeholder}</label>
</div>
