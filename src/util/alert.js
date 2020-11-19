import Vue from 'vue'
const vm = new Vue();

export const success = (msg) => {
    vm.$message({
        message: msg,
        type: 'success'
      });
}

export const warning = (msg) => {
    vm.$message({
        message: msg,
        type: 'warning'
      });
}