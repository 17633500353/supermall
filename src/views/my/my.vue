<template>
  <div>
    <h2>我是我的</h2>
    <BetterScorll ref="llll" class="ss" :probeType1="3" @scro="ssss">
      <ul>
        <li>woshi1</li>
        <li>woshi2</li>
        <li>woshi3</li>
        <li>woshi4</li>
        <li>woshi5</li>
        <li>woshi6</li>
        <li>woshi7</li>
        <li>woshi8</li>
        <li>woshi9</li>
        <li>woshi10</li>
        <li>woshi11</li>
        <li>woshi12</li>
        <li>woshi13</li>
        <li>woshi14</li>
        <li>woshi15</li>
        <li>woshi16</li>
        <li>woshi17</li>
        <li>woshi18</li>
        <li>woshi19</li>
        <li>woshi20</li>
        <li>woshi21</li>
        <li>woshi22</li>
        <li>woshi23</li>
        <li>woshi24</li>
        <li>woshi25</li>
        <li>woshi26</li>
        <li>woshi27</li>
        <li>woshi28</li>
        <li>woshi29</li>
        <li>woshi30</li>
        <li>woshi31</li>
        <li>woshi32</li>
        <li>woshi33</li>
        <li>woshi34</li>
        <li>woshi35</li>
        <li>woshi36</li>
        <li>woshi37</li>
        <li>woshi38</li>
        <li>woshi39</li>
        <li>woshi40</li>
        <li>woshi41</li>
        <li>woshi42</li>
        <li>woshi43</li>
        <li>woshi44</li>
        <li>woshi45</li>
        <li>woshi46</li>
        <li>woshi47</li>
        <li>woshi48</li>
        <li>woshi49</li>
        <li>woshi50</li>
        <li>woshi51</li>
        <li>woshi52</li>
        <li>woshi53</li>
        <li>woshi54</li>
        <li>woshi55</li>
        <li>woshi56</li>
        <li>woshi57</li>
        <li>woshi58</li>
        <li>woshi59</li>
        <li>woshi60</li>
        <li>woshi61</li>
        <li>woshi62</li>
        <li>woshi63</li>
        <li>woshi64</li>
        <li>woshi65</li>
        <li>woshi66</li>
        <li>woshi67</li>
        <li>woshi68</li>
        <li>woshi69</li>
        <li>woshi70</li>
        <li>woshi71</li>
        <li>woshi72</li>
        <li>woshi73</li>
        <li>woshi74</li>
        <li>woshi75</li>
        <li>woshi76</li>
        <li>woshi77</li>
        <li>woshi78</li>
        <li>woshi79</li>
        <li>woshi80</li>
        <li>woshi81</li>
        <li>woshi82</li>
        <li>woshi83</li>
        <li>woshi84</li>
        <li>woshi85</li>
        <li>woshi86</li>
        <li>woshi87</li>
        <li>woshi88</li>
        <li>woshi89</li>
        <li>woshi90</li>
        <li>woshi91</li>
        <li>woshi92</li>
        <li>woshi93</li>
        <li>woshi94</li>
        <li>woshi95</li>
        <li>woshi96</li>
        <li>woshi97</li>
        <li>woshi98</li>
        <li>woshi99</li>
        <li>woshi100</li>
      </ul>
    </BetterScorll>
    <back v-show="isshow" @click.native="bett"></back>

  </div>
</template>

<script>

  import back from "components/content/backtop/BackTop"

  import BetterScorll from "components/common/betterscroll/bscroll"
    export default {
        name: "my",
      components:{
        BetterScorll,
        back
      },
      methods:{
        ssss(position){
          this.isshow=Math.abs(position.y)>200
        },
        bett(){
          this.$refs.llll.scrollbackTo(0,0,2000)
        }
      },
      data(){
          return{
            isshow:false
          }
      }

    }
</script>

<style scoped>
.ss{
  height: 300px;
  background-color: salmon;
  overflow: hidden;

}
</style>
