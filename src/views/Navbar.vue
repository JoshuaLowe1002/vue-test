<template>
    <div class="h-screen w-1/5 bg-blue-900 shadow-xl float-left p-2 text-white noselect">
        <div id="profile" class="highlight" onclick="highlightBox('profile')">
            <div id="first" class="rounded-lg bg-cover" style="background-image: url('https://avatars3.githubusercontent.com/u/25752941?s=460&u=131730e97ddb996d629a0c9a2a69d73a1254d8f9&v=4');"></div>
            <div id="second">
                <span class="font-extrabold">Joshua Lowe</span> Fulfilment Provider
            </div>
            <div id="third">
                <i id="arrow" class="far fa-arrow-alt-circle-down"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Post vue'
    };
  }
};
</script>

<style>
        #profile {
            display: flex;
            height: 50px;
            margin-left: 1px;
            margin-right: 1px;
            padding: 2px;
            border-radius: 10px;
            cursor: pointer;
        }
        
        #wrapper {
            display: flex;
            height: 50px;
            margin-left: 1px;
            margin-right: 1px;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 2px;
            border-radius: 10px;
            cursor: pointer;
        }
        
        #title {
            margin-left: 1px;
            margin-right: 1px;
            margin-bottom: 10px;
            margin-top: 20px;
            padding: 2px;
            border-radius: 10px;
        }
        
        #first {
            width: 45px;
            margin-right: 7px;
        }
        
        #second {
            width: 65%;
            margin-right: 7px;
        }
        
        #third {
            width: 12%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
        }
        
         :root {
            --animate-duration: 600ms;
        }
        
        .highlight {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .noselect {
            -webkit-touch-callout: none;
            /* iOS Safari */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Old versions of Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */
            user-select: none;
        }
        
        #wrapper:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        body {
            background-color: #e3eef8;
        }
        
        .fa-arrow-alt-circle-right:before {
            content: "\f35a" !important;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 5fr 5fr;
            gap: 10px 10px;
            grid-template-areas: "Main Main" "Left Right";
            width: 80%;
            height: 91%;
            padding: 15px;
        }
        
        .Main {
            grid-area: Main;
        }
        
        .Left {
            grid-area: Left;
        }
        
        .Right {
            grid-area: Right;
        }
</style>