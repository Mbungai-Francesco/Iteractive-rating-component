nums =  document.querySelectorAll('li')
choose = false
colored = -1
console.log(nums[0])
for(i=0;i<nums.length;i++){
    nums[i].addEventListener("click",function (){
        choose = true
        if(colored!=this.value && colored>=0){
            nums[colored].classList.remove("shine")
            nums[colored].classList.add("base")
            nums[this.value].classList.remove("base")
            nums[this.value].classList.add("shine")
        }
        else if(colored==this.value && colored>=0){
            nums[this.value].classList.toggle("shine")
            choose = false
        }
        else{
            nums[this.value].classList.add("shine")
        }
        colored = this.value
    })
}
// $(".selc span").text(colored+1);
function submit(){
    if(choose == true){
        document.querySelector(".main2").classList.toggle("view")
        document.querySelector(".main").classList.toggle("view")
        document.querySelector(".selc span").textContent = colored+1
    }
}