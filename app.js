nums =  document.querySelectorAll('li')
// colored = 0
console.log(nums[0])
for(i=0;i<nums.length;i++){
    nums[i].addEventListener("click",function (){
        if(this.value > 0){
            for(j=0;j<nums.length;j++){
                nums[j].classList.remove("preShine")
                nums[j].classList.remove("shine")
                nums[j].classList.add("base")
            }
            for(k=0;k<nums.length;k++){
                if(k==this.value){
                    nums[this.value].classList.remove("base")
                    nums[this.value].classList.add("shine")
                    colored = this.value
                    // console.log("eat")
                }
                // if(k==this.value-1){
                //     // console.log("eated")
                //     nums[this.value - 1].classList.remove("base")
                //     nums[this.value - 1].classList.add("preShine")
                //     colored = this.value
                // }
            }
        }
        else{
            for(i=0;i<nums.length;i++){
                nums[i].classList.add("base")
            }
            nums[this.value].classList.remove("base")
            nums[this.value].classList.toggle("shine")
            colored = this.value
        }
    })
}
// $(".selc span").text(colored+1);
function submit(){
    document.querySelector(".main2").classList.toggle("view")
    document.querySelector(".main").classList.toggle("view")
    document.querySelector(".selc span").textContent = colored+1
}