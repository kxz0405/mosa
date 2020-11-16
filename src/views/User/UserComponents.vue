<template src="./User.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
export default {
    
    computed:
    {
        UserData(){
            return this.$store.state.userdata
        },

        Administrator:{
            get(){
                return this.$store.state.Administrator
            },
            set(val){
                this.$store.state.Administrator=val
            }
        },


        NowLoginUser:{
            get(){
                return this.$store.state.NowLoginUsers
            },
            set(used){
                this.$store.commit("SetNowLoginUser",used)
            }
        }
    },

    mounted()
    {
        this.$store.dispatch('GetUser')
    },

    methods:{
        LogIn(){
            var Account = this.$('#username').val().trim()
            var Password=this.$('#password').val().trim()
            // var administrator=false
            if(!Account) return;  
            if(!Password) return;
            var user={
                UserAccount:Account,
                UserPassword:Password
            }
            
            var result = this.$.map(this.UserData, function (users) {
                            return users.Account;
                        }).indexOf(user.UserAccount);
            
            

            if(result!==-1){
                this.$router.push({path:'/ShopComponents/SpecialMenu'})
                this.NowLoginUser=user
                this.Administrator=true
                if(user.UserAccount===this.UserData[0].Account && user.UserPassword === this.UserData[0].Password)
                {
                    alert('管理者登入')
                    return
                }
                alert('登入成功')
            }else
            {
                console.log('out')
            }
            
        }
    }

}
</script>