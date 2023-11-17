nums =  document.querySelectorAll('li')
colored = []
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
                    console.log("eat")
                }
                if(k==this.value-1){
                    console.log("eated")
                    nums[this.value - 1].classList.remove("base")
                    nums[this.value - 1].classList.add("preShine")
                }
            }
        }
        else{
            for(i=0;i<nums.length;i++){
                nums[i].classList.add("base")
            }
            nums[this.value].classList.remove("base")
            nums[this.value].classList.toggle("shine")
        }
    })
}
