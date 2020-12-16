const string = `
/* 我们先给皮卡丘上色吧！ */
.skin {
  position: relative;
  background: #ffe600;
  min-height:60vh;
}
/* 接下来我们画皮卡丘圆圆的眼睛！ */
.eye {
  border: 3px solid #000;
  background: #2e2e2e;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -32px;
  border-radius: 50px;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  background: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  left: 6px;
}
.eye.left {
  transform: translate(-125px);
}
.eye.right {
  transform: translate(125px);
}
/* 然后我们来画皮卡丘可爱的小鼻子 */
.nose {
  border-color: #000 transparent transparent transparent;
  width: 0px;
  height: 0px;
  border-width: 10px;
  border-style: solid;
  border-radius: 50%;
  position: relative;
  top: 200px;
  left: 50%;
  margin-left: -10px;
  z-index: 2;
}
/* 给鼻子加上动画 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 200ms infinite linear;
}
/* 来画皮卡丘红红的小脸蛋 */
.face {
  position: absolute;
  border: 3px solid black;
  background: #f00;
  height: 88px;
  width: 88px;
  top: 260px;
  left: 50%;
  margin-left: -44px;
  border-radius: 50%;
}
.face > img {
  position: relative;
  left: 50%;
  top: 50%;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}

.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
/* 我们开始画皮卡丘的嘴啦~ */
.mouth {
  width: 200px;
  height: 300px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 210px;
}
/* 先画上嘴唇 */
.mouth .up {
  position: relative;
  top: 0;
  z-index: 1;
}
.mouth .up .lip {
  position: relative;
  position: absolute;
  border: 3px solid black;
  background: #ffe600;
  width: 100px;
  height: 30px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
 top:0;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 50%;
  transform: rotate(-15deg) translateX(-43px);
}
.mouth .up .lip.right {
  border-radius: 50%;
  transform: rotate(15deg) translateX(43px);
}
.mouth .up .lip:before {
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 30px;
  bottom: 0;
  /* background: #ffe600; */
}
.mouth .up .lip.left::before {
  border-radius: 0 0 0 20px;
  right: -5px;
}
.mouth .up .lip.right::before {
  border-radius: 0 0 20px 0;
  left: -5px;
}
/* 再给皮卡丘加上大大的笑容 */
.mouth .down {
  width: 100%;
  height: 150px;
  position: absolute;
  top: 20px;
  overflow: hidden;
}
.mouth .down .round2 {
  border: 3px solid black;
  background: #9b000a;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 100px/400px;
  overflow: hidden;
}
.mouth .down .round2 .round3 {
  background: #ff485f;
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: -25px;
  left: 50%;
  margin-left: -75px;
  border-radius: 200px;
}
/* 好啦，一个皮卡丘就这样画完啦 */
`
export default string