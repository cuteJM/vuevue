<template>
    <div class="home">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <slot>
                
              </slot>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default{
    name:"ContentBash",
}
</script>

<style>
.container{
  margin-top: 20px;
}
</style>