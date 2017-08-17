@charset "UTF-8";
.nav {
  width: 100%;
  text-align: center;
  font-size: 0;
  padding: 10px 0;
  background-color: white; }
  .nav.fixed {
    position: fixed;
    z-index: 100;
    top: -70px;
    -webkit-transition: top 0.4s ease;
    -o-transition: top 0.4s ease;
    transition: top 0.4s ease; }
    .nav.fixed.show {
      top: 0; }
    .nav.fixed.hide {
      top: -70px; }
  .nav > div {
    display: inline-block; }
  .nav-item-img {
    border: 1px solid red;
    vertical-align: middle;
    font-size: 0; }
  .nav-item-search {
    position: relative;
    vertical-align: bottom;
    margin: 0 5%;
    width: 40%;
    font-size: 20px; }
    .nav-item-search input[type='text'] {
      border: none;
      border-bottom: 1px solid #d4d4d4;
      height: 30px;
      width: 100%;
      font-size: 15px; }
    .nav-item-search:before {
      content: '\f002';
      top: 50%;
      margin-top: 3px;
      z-index: 20;
      font-family: FontAwesome;
      position: absolute;
      display: block;
      font-size: 20px;
      height: 5px;
      right: 2px;
      top: 2px; }

@media all and (min-width: 1040px) and (max-width: 1240px) {
  .nav-item-search {
    width: 30%; } }

@media all and (min-width: 750px) and (max-width: 1039px) {
  .nav-item.button.white {
    display: none; }
  .nav-item-search {
    width: 35%; } }

@media all and (min-width: 0) and (max-width: 749px) {
  .nav-item.button {
    display: none; }
  .nav-item-img {
    width: 65px; }
  .nav-item-search {
    width: calc(90% - 70px);
    margin: 0; } }

.slider-container-big {
  height: 900px;
  position: relative;
  width: 100%;
  overflow: hidden; }
  .slider-container-big .slider {
    position: relative;
    white-space: nowrap;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    font-size: 0;
    left: -100%; }
    .slider-container-big .slider-front {
      position: absolute;
      padding: 20px;
      color: white;
      width: 100%;
      height: 100%; }
    .slider-container-big .slider .item-1 {
      background: url("../img/first.jpg");
      left: 0%; }
    .slider-container-big .slider .item-2 {
      background: url("../img/second.jpg");
      left: 100%; }
    .slider-container-big .slider .item-3 {
      background: url("../img/third.jpg");
      left: 200%; }
    .slider-container-big .slider .item-4 {
      background: url("../img/fourth.jpg");
      left: 300%; }
    .slider-container-big .slider .img-1 {
      display: inline-block;
      width: 100%;
      border: 20px solid white;
      position: absolute;
      height: 900px;
      background-position: 50% 50%;
      -webkit-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
      background-size: cover; }
    .slider-container-big .slider .img-2 {
      display: inline-block;
      width: 100%;
      border: 20px solid white;
      position: absolute;
      height: 100%;
      background-position: 50% 50%;
      -webkit-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
      background-size: 100% 100%; }
    .slider-container-big .slider-text {
      position: relative;
      display: inline-block;
      color: red; }
      .slider-container-big .slider-text h2 {
        color: red; }
  .slider-container-big .slider-video {
    text-align: right;
    height: 100%;
    padding: 0 50px; }
    .slider-container-big .slider-video-img {
      display: inline-block;
      list-style-type: none;
      position: relative;
      height: 30vw;
      width: 34vw;
      top: 50%;
      margin-top: -15vw;
      -webkit-box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
              box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
      float: right;
      border: 1px solid gray;
      border-top: 35px solid #f9fafc;
      -webkit-box-shadow: 1px 1px 1px gray;
              box-shadow: 1px 1px 1px gray; }
      .slider-container-big .slider-video-img .item-1 {
        background: url("../img/third.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-big .slider-video-img .item-2 {
        background: url("../img/second.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-big .slider-video-img .item-3 {
        background: url("../img/first.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-big .slider-video-img .item-4 {
        background: url("../img/fourth.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-big .slider-video-img li {
        width: 100%;
        height: 100%;
        background-color: navy;
        color: white;
        font-size: 20px;
        text-align: center;
        position: absolute; }
      .slider-container-big .slider-video-img:after {
        content: "\f04b";
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        color: black;
        position: absolute;
        background-color: white;
        opacity: 0;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        text-align: center;
        margin-left: -25px;
        padding: 20px; }
      .slider-container-big .slider-video-img:hover::after {
        content: "\f04b";
        color: black;
        opacity: 1; }
    .slider-container-big .slider-video .wrapper {
      width: 100%;
      text-align: center;
      display: none; }
    .slider-container-big .slider-video-text {
      display: table-cell;
      vertical-align: middle;
      list-style-type: none;
      height: 860px;
      position: relative;
      text-align: left;
      width: 34vw;
      float: left;
      line-height: 860px; }
      .slider-container-big .slider-video-text .text-correct {
        display: inline-block;
        line-height: normal;
        width: 100%; }
      .slider-container-big .slider-video-text p {
        margin: 10px 0; }
        .slider-container-big .slider-video-text p.big {
          font-family: Gotham,sans-serif;
          font-size: 22px;
          line-height: 1.63636364em;
          letter-spacing: 0.20454545em;
          text-transform: uppercase; }
        .slider-container-big .slider-video-text p.little {
          font-size: 14px;
          font-weight: 100;
          font-family: 'Gotham SSm',sans-serif;
          font-size: 9px;
          line-height: 1.11111111em;
          letter-spacing: 0.33333333em;
          font-weight: 500;
          text-transform: uppercase;
          opacity: 0.5; }
        .slider-container-big .slider-video-text p.main {
          font-family: Gotham SSm,sans-serif;
          font-size: 14px;
          line-height: 1.85714286em;
          color: #a7a7a7; }
        .slider-container-big .slider-video-text p .button {
          background-color: transparent;
          border: white;
          color: white; }
  .slider-container-big .control-button {
    opacity: 0;
    cursor: w-resize;
    width: 50px;
    height: 860px;
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 10; }
    .slider-container-big .control-button + .control-button {
      right: 20px;
      left: auto;
      cursor: e-resize; }
    .slider-container-big .control-button.view {
      opacity: 0;
      background-color: black;
      color: white;
      border: none;
      height: 50px;
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
      width: 150px;
      top: 50%;
      margin-top: -25px;
      left: 50%;
      margin-left: -75px;
      /*
          opacity:1;
        border:none;
          position:relative;
          margin:0 auto;
          height:50px;
          width:150px;
          background-color:black;
          color:white;
          opacity:0;
          display:block;
          transition:all 1s ease;
          cursor:pointer;
          text-transform: uppercase;
          top:50%;
          margin-top:-25px;
*/ }

.video-container {
  position: absolute;
  z-index: -30;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 900px;
  opacity: 0;
  -webkit-transition: all 1.5s ease;
  -o-transition: all 1.5s ease;
  transition: all 1.5s ease; }
  .video-container:after {
    content: '';
    position: absolute;
    height: 40px;
    top: 20px;
    left: 20px;
    right: 20px;
    background-color: black; }
  .video-container #player {
    width: 100%;
    height: 860px; }
  .video-container.show {
    z-index: 100;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    opacity: 1; }

@media all and (min-width: 0) and (max-width: 499px) {
  .slider-container-big .slider .img {
    background-size: cover;
    background-position: 60% 50%; }
  .slider-container-big .slider-video {
    padding: 40px; }
    .slider-container-big .slider-video .wrapper {
      display: block;
      position: absolute;
      bottom: 60px;
      width: calc(100% - 120px);
      left: 60px; }
      .slider-container-big .slider-video .wrapper button {
        width: 100%;
        margin-top: 50px; }
    .slider-container-big .slider-video-img {
      float: none;
      top: 50%;
      margin: 60px auto;
      display: block;
      height: 200px;
      width: 250px;
      position: absolute;
      margin-top: -100px;
      left: 50%;
      margin-left: -125px; }
    .slider-container-big .slider-video-text {
      line-height: normal;
      display: block;
      margin: 0 auto;
      float: none;
      height: auto;
      width: 100%; }
      .slider-container-big .slider-video-text .text-correct button {
        display: none; }
      .slider-container-big .slider-video-text p {
        text-align: center; } }

@media all and (min-width: 500px) and (max-width: 699px) {
  .slider-container-big .slider .img {
    background-size: cover;
    background-position: 60% 50%; }
  .slider-container-big .slider-video {
    padding: 40px; }
    .slider-container-big .slider-video .wrapper {
      display: block;
      position: absolute;
      bottom: 60px;
      width: calc(100% - 120px);
      left: 60px; }
      .slider-container-big .slider-video .wrapper button {
        width: 100%;
        margin-top: 50px; }
    .slider-container-big .slider-video-img {
      float: none;
      top: 50%;
      margin: 60px auto;
      display: block;
      height: 300px;
      width: 400px;
      position: absolute;
      margin-top: -150px;
      left: 50%;
      margin-left: -200px; }
    .slider-container-big .slider-video-text {
      line-height: normal;
      display: block;
      margin: 0 auto;
      float: none;
      height: auto;
      width: 100%; }
      .slider-container-big .slider-video-text .text-correct button {
        display: none; }
      .slider-container-big .slider-video-text p {
        text-align: center; } }

@media all and (min-width: 700px) and (max-width: 999px) {
  .slider-container-big .slider .img {
    background-size: cover;
    background-position: 60% 50%; }
  .slider-container-big .slider-video {
    padding: 40px; }
    .slider-container-big .slider-video .wrapper {
      display: block; }
      .slider-container-big .slider-video .wrapper button {
        width: 500px; }
    .slider-container-big .slider-video-img {
      float: none;
      top: auto;
      margin: 60px auto;
      display: block;
      height: 400px;
      width: 500px; }
    .slider-container-big .slider-video-text {
      line-height: normal;
      display: block;
      margin: 0 auto;
      float: none;
      height: auto;
      width: 500px; }
      .slider-container-big .slider-video-text .text-correct button {
        display: none; }
      .slider-container-big .slider-video-text p {
        text-align: center; } }

@media all and (min-width: 1000px) and (max-width: 1600px) {
  .slider-container-big .slider .img {
    background-size: cover;
    background-position: 60% 50%; } }

@media all and (min-width: 1601px) and (max-width: 1999px) {
  .slider-container-big .slider-video-img {
    height: 28vw;
    width: 31.73324vw;
    margin-top: -14vw; } }

@media all and (min-width: 2000px) and (max-width: 3000px) {
  .slider-container-big .slider-video-img {
    height: 24vw;
    width: 27.19992vw;
    margin-top: -12vw; } }

.text {
  height: 1000px; }

.lazy {
  opacity: 0;
  -webkit-transition: opacity 1s ease;
  -o-transition: opacity 1s ease;
  transition: opacity 1s ease; }
  .lazy.opacity {
    opacity: 1; }

.row {
  width: 100%;
  margin: 3% 0;
  height: calc(30vw + 60px); }
  .row .wrapper {
    width: 100%;
    height: 100%; }
    .row .wrapper__item {
      display: inline-block;
      float: left;
      height: 100%;
      padding: 30px; }
      .row .wrapper__item.text {
        line-height: calc(30vw + 60px);
        width: 40%;
        font-size: 16px;
        color: #a7a7a7; }
        .row .wrapper__item.text .header {
          font-family: 'Gotham SSm',sans-serif;
          font-size: 9px;
          line-height: 1.11111111em;
          letter-spacing: 0.33333333em;
          font-weight: 500;
          text-transform: uppercase;
          opacity: 0.5; }
        .row .wrapper__item.text .main {
          font-family: Gotham SSm,sans-serif;
          font-size: 14px;
          line-height: 1.85714286em; }
        .row .wrapper__item.text h2 {
          color: black;
          letter-spacing: 0.20454545em;
          font-family: Gotham,sans-serif;
          font-size: 22px;
          line-height: 1.63636364em; }
      .row .wrapper__item.content {
        width: 60%; }
    .row .wrapper__text {
      display: inline-block;
      line-height: normal; }
      .row .wrapper__text h2 {
        margin: 5px 0; }
      .row .wrapper__text p {
        margin: 5px 0; }

.slider-container-little {
  height: 30vw;
  position: relative;
  width: 100%;
  overflow: hidden; }
  .slider-container-little .slider {
    position: relative;
    white-space: nowrap;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    font-size: 0;
    left: -100%; }
    .slider-container-little .slider-front {
      position: absolute;
      padding: 20px;
      color: white;
      width: 100%;
      height: 100%; }
    .slider-container-little .slider .item-1 {
      background: url("../img/first.jpg");
      left: 0%; }
    .slider-container-little .slider .item-2 {
      background: url("../img/second.jpg");
      left: 100%; }
    .slider-container-little .slider .item-3 {
      background: url("../img/third.jpg");
      left: 200%; }
    .slider-container-little .slider .item-4 {
      background: url("../img/fourth.jpg");
      left: 300%; }
    .slider-container-little .slider .img-1 {
      display: inline-block;
      width: 100%;
      border: 0 solid white;
      position: absolute;
      height: 30vw;
      background-position: 50% 50%;
      -webkit-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
      background-size: cover; }
    .slider-container-little .slider .img-2 {
      display: inline-block;
      width: 100%;
      border: 0 solid white;
      position: absolute;
      height: 100%;
      background-position: 50% 50%;
      -webkit-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
      background-size: 100% 100%; }
    .slider-container-little .slider-text {
      position: relative;
      display: inline-block;
      color: red; }
      .slider-container-little .slider-text h2 {
        color: red; }
  .slider-container-little .slider-video {
    text-align: right;
    height: 100%;
    padding: 0 50px; }
    .slider-container-little .slider-video-img {
      display: inline-block;
      list-style-type: none;
      position: relative;
      height: 30vw;
      width: 34vw;
      top: 50%;
      margin-top: -15vw;
      -webkit-box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
              box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
      float: right;
      border: 1px solid gray;
      border-top: 35px solid #f9fafc;
      -webkit-box-shadow: 1px 1px 1px gray;
              box-shadow: 1px 1px 1px gray; }
      .slider-container-little .slider-video-img .item-1 {
        background: url("../img/third.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-little .slider-video-img .item-2 {
        background: url("../img/second.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-little .slider-video-img .item-3 {
        background: url("../img/first.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-little .slider-video-img .item-4 {
        background: url("../img/fourth.jpg");
        background-position: 50% 50%;
        background-size: cover;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0; }
      .slider-container-little .slider-video-img li {
        width: 100%;
        height: 100%;
        background-color: navy;
        color: white;
        font-size: 20px;
        text-align: center;
        position: absolute; }
      .slider-container-little .slider-video-img:after {
        content: "\f04b";
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        color: black;
        position: absolute;
        background-color: white;
        opacity: 0;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        text-align: center;
        margin-left: -25px;
        padding: 20px; }
      .slider-container-little .slider-video-img:hover::after {
        content: "\f04b";
        color: black;
        opacity: 1; }
    .slider-container-little .slider-video .wrapper {
      width: 100%;
      text-align: center;
      display: none; }
    .slider-container-little .slider-video-text {
      display: table-cell;
      vertical-align: middle;
      list-style-type: none;
      height: 860px;
      position: relative;
      text-align: left;
      width: 34vw;
      float: left;
      line-height: 860px; }
      .slider-container-little .slider-video-text .text-correct {
        display: inline-block;
        line-height: normal;
        width: 100%; }
      .slider-container-little .slider-video-text p {
        margin: 10px 0; }
        .slider-container-little .slider-video-text p.big {
          font-family: Gotham,sans-serif;
          font-size: 22px;
          line-height: 1.63636364em;
          letter-spacing: 0.20454545em;
          text-transform: uppercase; }
        .slider-container-little .slider-video-text p.little {
          font-size: 14px;
          font-weight: 100;
          font-family: 'Gotham SSm',sans-serif;
          font-size: 9px;
          line-height: 1.11111111em;
          letter-spacing: 0.33333333em;
          font-weight: 500;
          text-transform: uppercase;
          opacity: 0.5; }
        .slider-container-little .slider-video-text p.main {
          font-family: Gotham SSm,sans-serif;
          font-size: 14px;
          line-height: 1.85714286em;
          color: #a7a7a7; }
        .slider-container-little .slider-video-text p .button {
          background-color: transparent;
          border: white;
          color: white; }
  .slider-container-little .control-button {
    opacity: 0;
    cursor: w-resize;
    width: 50px;
    height: 30vw;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10; }
    .slider-container-little .control-button + .control-button {
      right: 0;
      left: auto;
      cursor: e-resize; }
    .slider-container-little .control-button.view {
      opacity: 0;
      background-color: black;
      color: white;
      border: none;
      height: 50px;
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
      width: 150px;
      top: 50%;
      margin-top: -25px;
      left: 50%;
      margin-left: -75px;
      /*
          opacity:1;
        border:none;
          position:relative;
          margin:0 auto;
          height:50px;
          width:150px;
          background-color:black;
          color:white;
          opacity:0;
          display:block;
          transition:all 1s ease;
          cursor:pointer;
          text-transform: uppercase;
          top:50%;
          margin-top:-25px;
*/ }

.slider-container-little {
  border: 1px solid gray;
  border-top: 50px solid #f9fafc;
  -webkit-box-shadow: 2px 2px 2px gray, 5px 5px 10px gray;
          box-shadow: 2px 2px 2px gray, 5px 5px 10px gray;
  display: inline-block; }
  .slider-container-little .slider {
    height: 100%; }
  .slider-container-little:hover .slider {
    opacity: 0.5;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; }
  .slider-container-little:hover .control-button.view {
    opacity: 1; }

@media all and (min-width: 0) and (max-width: 649px) {
  .row {
    height: auto;
    display: inline-block; }
    .row .wrapper__item.content {
      width: 100%; }
    .row .wrapper__item.text {
      width: 100%;
      text-align: center;
      display: block;
      height: auto;
      line-height: normal;
      font-size: 14px; }
    .row .wrapper__text {
      font-size: 0.9em; }
  .slider-container-little {
    height: 50vw;
    position: relative;
    width: 100%;
    overflow: hidden; }
    .slider-container-little .slider {
      position: relative;
      white-space: nowrap;
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
      font-size: 0;
      left: -100%; }
      .slider-container-little .slider-front {
        position: absolute;
        padding: 20px;
        color: white;
        width: 100%;
        height: 100%; }
      .slider-container-little .slider .item-1 {
        background: url("../img/first.jpg");
        left: 0%; }
      .slider-container-little .slider .item-2 {
        background: url("../img/second.jpg");
        left: 100%; }
      .slider-container-little .slider .item-3 {
        background: url("../img/third.jpg");
        left: 200%; }
      .slider-container-little .slider .item-4 {
        background: url("../img/fourth.jpg");
        left: 300%; }
      .slider-container-little .slider .img-1 {
        display: inline-block;
        width: 100%;
        border: 0 solid white;
        position: absolute;
        height: 50vw;
        background-position: 50% 50%;
        -webkit-transition: all 0.7s ease;
        -o-transition: all 0.7s ease;
        transition: all 0.7s ease;
        background-size: cover; }
      .slider-container-little .slider .img-2 {
        display: inline-block;
        width: 100%;
        border: 0 solid white;
        position: absolute;
        height: 100%;
        background-position: 50% 50%;
        -webkit-transition: all 0.7s ease;
        -o-transition: all 0.7s ease;
        transition: all 0.7s ease;
        background-size: 100% 100%; }
      .slider-container-little .slider-text {
        position: relative;
        display: inline-block;
        color: red; }
        .slider-container-little .slider-text h2 {
          color: red; }
    .slider-container-little .slider-video {
      text-align: right;
      height: 100%;
      padding: 0 50px; }
      .slider-container-little .slider-video-img {
        display: inline-block;
        list-style-type: none;
        position: relative;
        height: 30vw;
        width: 34vw;
        top: 50%;
        margin-top: -15vw;
        -webkit-box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
                box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
        float: right;
        border: 1px solid gray;
        border-top: 35px solid #f9fafc;
        -webkit-box-shadow: 1px 1px 1px gray;
                box-shadow: 1px 1px 1px gray; }
        .slider-container-little .slider-video-img .item-1 {
          background: url("../img/third.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-2 {
          background: url("../img/second.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-3 {
          background: url("../img/first.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-4 {
          background: url("../img/fourth.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img li {
          width: 100%;
          height: 100%;
          background-color: navy;
          color: white;
          font-size: 20px;
          text-align: center;
          position: absolute; }
        .slider-container-little .slider-video-img:after {
          content: "\f04b";
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          color: black;
          position: absolute;
          background-color: white;
          opacity: 0;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          top: 50%;
          left: 50%;
          margin-top: -25px;
          text-align: center;
          margin-left: -25px;
          padding: 20px; }
        .slider-container-little .slider-video-img:hover::after {
          content: "\f04b";
          color: black;
          opacity: 1; }
      .slider-container-little .slider-video .wrapper {
        width: 100%;
        text-align: center;
        display: none; }
      .slider-container-little .slider-video-text {
        display: table-cell;
        vertical-align: middle;
        list-style-type: none;
        height: 860px;
        position: relative;
        text-align: left;
        width: 34vw;
        float: left;
        line-height: 860px; }
        .slider-container-little .slider-video-text .text-correct {
          display: inline-block;
          line-height: normal;
          width: 100%; }
        .slider-container-little .slider-video-text p {
          margin: 10px 0; }
          .slider-container-little .slider-video-text p.big {
            font-family: Gotham,sans-serif;
            font-size: 22px;
            line-height: 1.63636364em;
            letter-spacing: 0.20454545em;
            text-transform: uppercase; }
          .slider-container-little .slider-video-text p.little {
            font-size: 14px;
            font-weight: 100;
            font-family: 'Gotham SSm',sans-serif;
            font-size: 9px;
            line-height: 1.11111111em;
            letter-spacing: 0.33333333em;
            font-weight: 500;
            text-transform: uppercase;
            opacity: 0.5; }
          .slider-container-little .slider-video-text p.main {
            font-family: Gotham SSm,sans-serif;
            font-size: 14px;
            line-height: 1.85714286em;
            color: #a7a7a7; }
          .slider-container-little .slider-video-text p .button {
            background-color: transparent;
            border: white;
            color: white; }
    .slider-container-little .control-button {
      opacity: 0;
      cursor: w-resize;
      width: 50px;
      height: 50vw;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10; }
      .slider-container-little .control-button + .control-button {
        right: 0;
        left: auto;
        cursor: e-resize; }
      .slider-container-little .control-button.view {
        opacity: 0;
        background-color: black;
        color: white;
        border: none;
        height: 50px;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        width: 150px;
        top: 50%;
        margin-top: -25px;
        left: 50%;
        margin-left: -75px;
        /*
          opacity:1;
        border:none;
          position:relative;
          margin:0 auto;
          height:50px;
          width:150px;
          background-color:black;
          color:white;
          opacity:0;
          display:block;
          transition:all 1s ease;
          cursor:pointer;
          text-transform: uppercase;
          top:50%;
          margin-top:-25px;
*/ }
  .slider-container-little {
    border: none;
    border-radius: 0;
    overflow: inherit; } }

@media all and (min-width: 650px) and (max-width: 1000px) {
  .row {
    height: auto;
    display: inline-block; }
    .row .wrapper__item.content {
      width: 100%; }
    .row .wrapper__item.text {
      width: 100%;
      text-align: center;
      display: block;
      height: auto;
      line-height: normal;
      font-size: 14px; }
    .row .wrapper__text {
      font-size: 0.9em; }
  .slider-container-little {
    height: 50vw;
    position: relative;
    width: 100%;
    overflow: hidden; }
    .slider-container-little .slider {
      position: relative;
      white-space: nowrap;
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
      font-size: 0;
      left: -100%; }
      .slider-container-little .slider-front {
        position: absolute;
        padding: 20px;
        color: white;
        width: 100%;
        height: 100%; }
      .slider-container-little .slider .item-1 {
        background: url("../img/first.jpg");
        left: 0%; }
      .slider-container-little .slider .item-2 {
        background: url("../img/second.jpg");
        left: 100%; }
      .slider-container-little .slider .item-3 {
        background: url("../img/third.jpg");
        left: 200%; }
      .slider-container-little .slider .item-4 {
        background: url("../img/fourth.jpg");
        left: 300%; }
      .slider-container-little .slider .img-1 {
        display: inline-block;
        width: 100%;
        border: 0 solid white;
        position: absolute;
        height: 50vw;
        background-position: 50% 50%;
        -webkit-transition: all 0.7s ease;
        -o-transition: all 0.7s ease;
        transition: all 0.7s ease;
        background-size: cover; }
      .slider-container-little .slider .img-2 {
        display: inline-block;
        width: 100%;
        border: 0 solid white;
        position: absolute;
        height: 100%;
        background-position: 50% 50%;
        -webkit-transition: all 0.7s ease;
        -o-transition: all 0.7s ease;
        transition: all 0.7s ease;
        background-size: 100% 100%; }
      .slider-container-little .slider-text {
        position: relative;
        display: inline-block;
        color: red; }
        .slider-container-little .slider-text h2 {
          color: red; }
    .slider-container-little .slider-video {
      text-align: right;
      height: 100%;
      padding: 0 50px; }
      .slider-container-little .slider-video-img {
        display: inline-block;
        list-style-type: none;
        position: relative;
        height: 30vw;
        width: 34vw;
        top: 50%;
        margin-top: -15vw;
        -webkit-box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
                box-shadow: 3px 3px 3px brown, inset 3px 3px 3px brown;
        float: right;
        border: 1px solid gray;
        border-top: 35px solid #f9fafc;
        -webkit-box-shadow: 1px 1px 1px gray;
                box-shadow: 1px 1px 1px gray; }
        .slider-container-little .slider-video-img .item-1 {
          background: url("../img/third.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-2 {
          background: url("../img/second.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-3 {
          background: url("../img/first.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img .item-4 {
          background: url("../img/fourth.jpg");
          background-position: 50% 50%;
          background-size: cover;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          opacity: 0; }
        .slider-container-little .slider-video-img li {
          width: 100%;
          height: 100%;
          background-color: navy;
          color: white;
          font-size: 20px;
          text-align: center;
          position: absolute; }
        .slider-container-little .slider-video-img:after {
          content: "\f04b";
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          color: black;
          position: absolute;
          background-color: white;
          opacity: 0;
          -webkit-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
          top: 50%;
          left: 50%;
          margin-top: -25px;
          text-align: center;
          margin-left: -25px;
          padding: 20px; }
        .slider-container-little .slider-video-img:hover::after {
          content: "\f04b";
          color: black;
          opacity: 1; }
      .slider-container-little .slider-video .wrapper {
        width: 100%;
        text-align: center;
        display: none; }
      .slider-container-little .slider-video-text {
        display: table-cell;
        vertical-align: middle;
        list-style-type: none;
        height: 860px;
        position: relative;
        text-align: left;
        width: 34vw;
        float: left;
        line-height: 860px; }
        .slider-container-little .slider-video-text .text-correct {
          display: inline-block;
          line-height: normal;
          width: 100%; }
        .slider-container-little .slider-video-text p {
          margin: 10px 0; }
          .slider-container-little .slider-video-text p.big {
            font-family: Gotham,sans-serif;
            font-size: 22px;
            line-height: 1.63636364em;
            letter-spacing: 0.20454545em;
            text-transform: uppercase; }
          .slider-container-little .slider-video-text p.little {
            font-size: 14px;
            font-weight: 100;
            font-family: 'Gotham SSm',sans-serif;
            font-size: 9px;
            line-height: 1.11111111em;
            letter-spacing: 0.33333333em;
            font-weight: 500;
            text-transform: uppercase;
            opacity: 0.5; }
          .slider-container-little .slider-video-text p.main {
            font-family: Gotham SSm,sans-serif;
            font-size: 14px;
            line-height: 1.85714286em;
            color: #a7a7a7; }
          .slider-container-little .slider-video-text p .button {
            background-color: transparent;
            border: white;
            color: white; }
    .slider-container-little .control-button {
      opacity: 0;
      cursor: w-resize;
      width: 50px;
      height: 50vw;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10; }
      .slider-container-little .control-button + .control-button {
        right: 0;
        left: auto;
        cursor: e-resize; }
      .slider-container-little .control-button.view {
        opacity: 0;
        background-color: black;
        color: white;
        border: none;
        height: 50px;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
        width: 150px;
        top: 50%;
        margin-top: -25px;
        left: 50%;
        margin-left: -75px;
        /*
          opacity:1;
        border:none;
          position:relative;
          margin:0 auto;
          height:50px;
          width:150px;
          background-color:black;
          color:white;
          opacity:0;
          display:block;
          transition:all 1s ease;
          cursor:pointer;
          text-transform: uppercase;
          top:50%;
          margin-top:-25px;
*/ }
  .slider-container-little {
    margin: 0 auto; } }

.details {
  overflow: hidden;
  display: none;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  margin: 10px 0; }
  .details.display {
    display: block; }
  .details .wrapper {
    display: table;
    width: 90%;
    margin: 0 auto; }
    .details .wrapper__row {
      width: 100%;
      display: table-row;
      -webkit-transition: all 1.5s ease;
      -o-transition: all 1.5s ease;
      transition: all 1.5s ease; }
      .details .wrapper__row.opacity {
        opacity: 1; }
    .details .wrapper__item {
      display: table-cell;
      margin: 10px 0;
      padding: 30px;
      vertical-align: middle; }
      .details .wrapper__item p, .details .wrapper__item h2, .details .wrapper__item button {
        margin: 10px 0; }
      .details .wrapper__item .header {
        font-family: 'Gotham SSm',sans-serif;
        font-size: 9px;
        line-height: 1.11111111em;
        letter-spacing: 0.33333333em;
        font-weight: 500;
        text-transform: uppercase;
        opacity: 0.5; }
      .details .wrapper__item .main {
        font-family: Gotham SSm,sans-serif;
        font-size: 14px;
        line-height: 1.85714286em;
        color: #a7a7a7; }
      .details .wrapper__item h2 {
        color: black;
        letter-spacing: 0.20454545em;
        font-family: Gotham,sans-serif;
        font-size: 22px;
        line-height: 1.63636364em; }
    .details .wrapper__text {
      max-width: 400px;
      margin: 0 auto; }
    .details .wrapper__bottom {
      width: 100%;
      text-align: center;
      margin-bottom: 50px; }
    .details .wrapper__img {
      text-align: center; }
      .details .wrapper__img img {
        width: 100%; }

@media all and (min-width: 0) and (max-width: 800px) {
  .details .wrapper__item {
    display: block;
    width: 100%;
    margin: 0; } }

@-webkit-keyframes kit {
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes kit {
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } }

.logos {
  font-size: 30px;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  padding: 10% 0;
  font-size: 0; }
  .logos__item {
    display: inline-block;
    position: relative;
    width: 25%;
    text-align: center;
    margin: 4% 0; }
    .logos__item a {
      -webkit-transition: opacity 0.5s ease;
      -o-transition: opacity 0.5s ease;
      transition: opacity 0.5s ease; }
      .logos__item a:hover {
        opacity: 0.5; }
    .logos__item img {
      max-width: 100px;
      -webkit-transition: width 1s,opacity 1s;
      -o-transition: width 1s,opacity 1s;
      transition: width 1s,opacity 1s;
      height: auto;
      max-height: 40px; }
  .logos__img {
    opacity: 1; }
    .logos__img.hide {
      -webkit-animation-name: kit;
              animation-name: kit;
      -webkit-animation-duration: 3s;
              animation-duration: 3s; }

@media all and (min-width: 0) and (max-width: 400px) {
  .logos__item {
    width: 50%; }
    .logos__item img {
      -webkit-transition: none;
      -o-transition: none;
      transition: none;
      max-width: 70px;
      width: 100%; }
    .logos__item a {
      width: 100%;
      float: left; }
    .logos__item.hide {
      display: none; } }

@media all and (min-width: 401px) and (max-width: 599px) {
  .logos__item {
    width: 33.3333%; }
    .logos__item img {
      width: 80px; }
    .logos__item.hide {
      display: none; } }

@media all and (min-width: 600px) and (max-width: 900px) {
  .logos__item {
    width: 33.3333%; }
    .logos__item img {
      width: 80px; }
    .logos__item.hide {
      display: none; } }

@media all and (min-width: 901px) and (max-width: 1200px) {
  .logos__item {
    width: 33.3333%; }
    .logos__item.hide {
      display: none; } }

/*
@include media (0,1200px) {
    .logos {
        &__item {
            &.hide {
                display: none;
            }
        }
    }
}
*/
.block .content {
  width: 100%;
  height: 60vw;
  margin: 0 auto;
  background-image: url("https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/8976/assets/pages/home/features/business-devices.jpg");
  background-size: cover;
  background-position: 500px 10%;
  background-color: black;
  background-repeat: no-repeat;
  position: relative; }
  .block .content.second {
    background-image: url("https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/8976/assets/pages/home/features/all-in-one-desk-2500w.jpg");
    background-position: 50% 50%;
    background-size: cover; }
    .block .content.second .content-text p {
      color: black; }
  .block .content-wrapper {
    display: table;
    width: 100%; }
  .block .content .fix {
    width: 100%;
    height: 50vw;
    display: none; }
  .block .content p {
    font-size: 20px; }
  .block .content-text {
    display: table-cell;
    vertical-align: middle;
    list-style-type: none;
    height: 60vw;
    position: relative;
    text-align: left;
    width: 50vw;
    padding: 60px; }
    .block .content-text .text-correct {
      display: inline-block;
      line-height: normal;
      width: 100%;
      color: white;
      max-width: 400px; }
    .block .content-text p {
      margin: 10px 0; }
      .block .content-text p.big {
        font-family: Gotham,sans-serif;
        font-size: 22px;
        line-height: 1.63636364em;
        letter-spacing: 0.20454545em;
        text-transform: uppercase; }
      .block .content-text p.little {
        font-size: 14px;
        font-weight: 100;
        font-family: 'Gotham SSm',sans-serif;
        font-size: 9px;
        line-height: 1.11111111em;
        letter-spacing: 0.33333333em;
        font-weight: 500;
        text-transform: uppercase;
        opacity: 0.5; }
      .block .content-text p.main {
        font-family: Gotham SSm,sans-serif;
        font-size: 14px;
        line-height: 1.85714286em;
        color: #a7a7a7; }
      .block .content-text p .button {
        background-color: transparent;
        border: white;
        color: white; }

@media all and (min-width: 0) and (max-width: 499px) {
  .block {
    height: auto; }
    .block .content {
      padding: 10px;
      height: auto;
      background-image: url("https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/8976/assets/pages/home/features/business-devices.jpg");
      background-size: cover;
      background-position: 50% -20vh;
      background-size: 60vh;
      background-color: black;
      background-repeat: no-repeat; }
      .block .content .fix {
        display: block;
        height: 30vh; }
      .block .content-text {
        width: 100%;
        text-align: center;
        height: 30vh;
        padding: 0; } }

@media all and (min-width: 500px) and (max-width: 599px) {
  .block {
    height: auto; }
    .block .content {
      height: auto;
      background-image: url("https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/8976/assets/pages/home/features/business-devices.jpg");
      background-size: cover;
      background-position: 50% -20vh;
      background-size: 100vw;
      background-color: black;
      background-repeat: no-repeat; }
      .block .content .fix {
        display: block; }
      .block .content-text {
        width: 100%;
        text-align: center;
        height: 50vw;
        padding: 0; } }

@media all and (min-width: 600px) and (max-width: 900px) {
  .block {
    height: 100vw; }
    .block .content {
      height: 100vw;
      background-image: url("https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/8976/assets/pages/home/features/business-devices.jpg");
      background-size: cover;
      background-position: 50% -20vh;
      background-size: 100vw;
      background-color: black;
      background-repeat: no-repeat;
      min-height: 600px; }
      .block .content.second .fix {
        display: none; }
      .block .content .fix {
        display: block; }
      .block .content-text {
        width: 100%;
        text-align: center;
        height: 50vw;
        padding: 0; } }

.button {
  width: 150px;
  height: 50px;
  border: none;
  text-transform: uppercase; }
  .button.block-black {
    border: 1px solid white;
    color: white;
    background-color: transparent; }
  .button.block-white {
    border: 1px solid black;
    color: black;
    background-color: transparent; }
  .button.black {
    background-color: black;
    color: white; }
  .button.white {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease; }
    .button.white:hover {
      color: rgba(0, 0, 0, 0.5); }

.index-1 {
  z-index: -1; }

.index-2 {
  z-index: -2; }

.index-3 {
  z-index: -3; }

.index-4 {
  z-index: -4; }

.index-5 {
  z-index: -5; }

.footer {
  padding: 40px 0; }
  .footer__container {
    width: 90%;
    margin: 0 auto;
    overflow: hidden; }
  .footer__service {
    display: inline-block;
    width: 30%; }
  .footer__nav {
    float: right;
    display: inline-block;
    width: 70%; }
  .footer__list {
    width: 20%;
    display: inline-block;
    list-style-type: none;
    float: left;
    padding: 0 5px; }
    .footer__list .arrow {
      display: none;
      float: right;
      -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
              transform: rotate(180deg);
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: -webkit-transform 0.5s ease;
      -o-transition: transform 0.5s ease;
      transition: transform 0.5s ease;
      transition: transform 0.5s ease, -webkit-transform 0.5s ease;
      font-size: 20px;
      font-weight: 900; }
      .footer__list .arrow.clicked {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
                transform: rotate(360deg); }
  .footer__list-item {
    margin: 4px 0;
    color: #888;
    display: block;
    -webkit-transition: color 0.5s ease;
    -o-transition: color 0.5s ease;
    transition: color 0.5s ease;
    z-index: 1;
    position: relative;
    font-family: "Gotham", sans-serif;
    font-size: 14px;
    margin: 10px 0; }
    .footer__list-item.arrow-anim:after {
      content: "➝";
      position: absolute;
      margin-left: 0;
      margin-top: -2px;
      opacity: 0;
      -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease; }
    .footer__list-item.arrow-anim:hover:after {
      content: "➝";
      position: absolute;
      opacity: 1;
      margin-left: 10px; }
    .footer__list-item:active, .footer__list-item:hover, .footer__list-item:link, .footer__list-item:visited {
      text-decoration: none; }
    .footer__list-item:hover {
      color: #222222; }
    .footer__list-item.header {
      margin: 10px 0;
      background-color: white;
      color: #222;
      position: relative;
      font-size: 14px;
      font-family: 'Gotham SSm',sans-serif;
      font-size: 12px; }

@media all and (min-width: 0) and (max-width: 599px) {
  .footer__nav {
    width: 100%; }
  .footer__service {
    width: 100%;
    text-align: center; }
  .footer__list {
    float: none;
    display: inline-block;
    width: 100%; }
    .footer__list .arrow {
      display: inline-block;
      position: absolute;
      right: 0; }
  .footer__list-item {
    margin: 0;
    padding: 4px; }
  .footer__list-items {
    position: relative;
    background-color: white;
    -webkit-transition: margin-top 0.5s ease;
    -o-transition: margin-top 0.5s ease;
    transition: margin-top 0.5s ease;
    margin-top: -140px; }
    .footer__list-items.show {
      margin-top: 0; }
  .footer__list-item.header {
    margin: 0;
    border-bottom: 1px solid #cccccc;
    padding: 15px 0; } }

@media all and (min-width: 600px) and (max-width: 900px) {
  .footer__nav {
    width: 100%; }
  .footer__service {
    width: 100%;
    text-align: center; } }

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

body {
  overflow-x: hidden; }

.empty {
  width: 100%;
  height: 400px;
  border: 2px solid mediumpurple; }
  .empty:after {
    content: 'EMPTY SECTION';
    position: relative;
    font-size: 90px;
    color: mediumpurple; }

.layer-1 {
  z-index: 10; }

.layer-2 {
  z-index: 20; }

.layer-3 {
  z-index: 30; }

.layer-4 {
  z-index: 40; }

.layer-5 {
  z-index: 50; }

.layer-6 {
  z-index: 60; }

.layer-7 {
  z-index: 70; }

.layer-8 {
  z-index: 80; }

.layer-9 {
  z-index: 90; }
