@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap');

@import url('https://fonts.googleapis.com/css?family=Dekko&display=swap');

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
/*
*   Imports de todos los archivos de estilos
*/
/*
*   Variables globales para el estilo
*/
/* ********** /
/   COLORS    /
/ ********** */
/* ********************* /
/   DEVICE BREAKPOINT    /
/ ********************* */
/* ********** /
/   STYLES    /
/ ********** */
/* ********** /
/  GRADIENTS  /
/ ********** */
/* Blink Elements */
.navbar.libro {
    margin-bottom: 0; }
  
  body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled).active a,
  body #book-index #indice .units ul#list-units li:not(.disabled).active a {
    background: #a2041b; }
  
  body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover,
  body #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover {
    background: #ce243d; }
  
  body #book-index #indice .col-main {
    background-image: linear-gradient(to right, #a2041b, #fa455f);
    opacity: 1; }
    body #book-index #indice .col-main li.current a,
    body #book-index #indice .col-main li a:hover {
      color: #ffffff; }
    body #book-index #indice .col-main .unit-content .material .item .imagen.libro:before {
      background-image: url(../../../images/contenido/recurso-bg-libro.jpg); }
    body #book-index #indice .col-main .unit-content .material .item .imagen.video:before, body #book-index #indice .col-main .unit-content .material .item .imagen.musica:before {
      background-image: url(../../../images/contenido/recurso-bg-multimedia.jpg); }
  
  .slider-control,
  #swipeview-slider {
    z-index: 2; }
  
  .content-wrapper {
    background-position: center; }
    .content-wrapper #actividad .content,
    .content-wrapper #swipeview-slider > div[id*=swipeview-masterpage-] {
      background-color: transparent; }
    .content-wrapper #actividad .content .carousel-inner .item-container {
      background-image: none; }
    .content-wrapper:not(.libro):before {
      background-color: #223c3f77;
      bottom: 0;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      pointer-events: none; }
  
  .slider-control {
    background-color: #223c3f; }
  
  .navbar-bottom {
    background-color: #223c3f; }
    .navbar-bottom .edit .slider-indicators .concat.active,
    .navbar-bottom .slider-indicators .active {
      background-color: #a2041b;
      color: #223c3f; }
  
  .spinner {
    display: none;
    visibility: hidden; }
  
  .widgetBackground {
    display: none; }
  
  /* Layout */
  .go-back,
  #layout-container div.go-back {
    background-color: transparent;
    display: block;
    position: relative;
    z-index: 2;
    flex: none; }
    .go-back button,
    #layout-container div.go-back button {
      color: #ffffff;
      background-color: inherit;
      height: 60px;
      transition: color .2s ease-in-out; }
      .go-back button span, .go-back button:before,
      #layout-container div.go-back button span,
      #layout-container div.go-back button:before {
        height: 100%;
        vertical-align: middle; }
      .go-back button span,
      #layout-container div.go-back button span {
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase; }
      .go-back button:before,
      #layout-container div.go-back button:before {
        content: "\2039";
        font-size: 40px;
        font-weight: 400;
        height: 100%;
        display: inline-block;
        width: 30px;
        line-height: 1em; }
      @media (hover: hover) {
        .go-back button:hover,
        #layout-container div.go-back button:hover {
          color: #ce243d; } }
      .go-back button:active,
      #layout-container div.go-back button:active {
        box-shadow: none;
        color: #ce243d; }
  
  #layout-container {
    align-items: stretch;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%; }
    #layout-container * {
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none; }
    #layout-container .section-title-1,
    #layout-container .section-title-2,
    #layout-container .section-title-3,
    #layout-container .section-title-4,
    #layout-container span {
      font-weight: 300; }
    #layout-container .section-title-1 {
      font-size: 60px; }
    #layout-container .section-title-4 {
      font-size: 18px; }
    #layout-container #main-screen {
      flex-direction: column;
      width: 100%;
      background-color: transparent;
      max-width: 100%; }
      #layout-container #main-screen #course-header {
        align-items: stretch;
        background-color: #223c3f55;
        color: #ffffff;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 15px;
        padding-left: calc(10% + 75px);
        z-index: 2; }
        #layout-container #main-screen #course-header .course-title {
          flex: 2;
          justify-content: flex-start; }
          #layout-container #main-screen #course-header .course-title span {
            font-size: 32px;
            line-height: 1.2em; }
          @media (max-width: 1024px) {
            #layout-container #main-screen #course-header .course-title {
              justify-content: center; }
              #layout-container #main-screen #course-header .course-title [class*=section-title-] {
                margin-top: 0;
                margin-bottom: 30px;
                font-size: 48px; }
              #layout-container #main-screen #course-header .course-title span {
                font-size: 24px; } }
          @media (max-width: 768px) {
            #layout-container #main-screen #course-header .course-title {
              padding: 15px; } }
          @media (max-height: 375px), (max-width: 476px) {
            #layout-container #main-screen #course-header .course-title {
              margin: 15px 0;
              padding: 0 15px; }
              #layout-container #main-screen #course-header .course-title [class*=section-title-] {
                font-size: 40px;
                line-height: 35px;
                margin-top: 0;
                margin-bottom: 10px;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all; }
              #layout-container #main-screen #course-header .course-title span {
                font-size: 22px; } }
        #layout-container #main-screen #course-header .course-extra {
          align-items: flex-end;
          justify-content: flex-end; }
          #layout-container #main-screen #course-header .course-extra ul {
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            width: 100%; }
            #layout-container #main-screen #course-header .course-extra ul li {
              background-color: #223c3f;
              border-left: 10px solid #ce243d;
              margin-bottom: 10px;
              padding: 0 25px;
              width: 70%;
              transition: width .3s ease-in; }
              #layout-container #main-screen #course-header .course-extra ul li a {
                color: #ffffff; }
                #layout-container #main-screen #course-header .course-extra ul li a span {
                  cursor: pointer;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: 500;
                  margin: 8px 0;
                  max-width: 100%;
                  overflow: hidden;
                  position: relative;
                  text-transform: uppercase;
                  text-overflow: ellipsis;
                  white-space: nowrap; }
              #layout-container #main-screen #course-header .course-extra ul li:active {
                width: 75%; }
              @media (hover: hover) {
                #layout-container #main-screen #course-header .course-extra ul li:hover {
                  width: 75%; } }
              @media (max-width: 476px) {
                #layout-container #main-screen #course-header .course-extra ul li {
                  overflow: hidden; }
                  #layout-container #main-screen #course-header .course-extra ul li span {
                    text-overflow: ellipsis;
                    width: 95%;
                    word-wrap: break-word; } }
    @media (max-width: 476px) and (hover: hover) {
      #layout-container #main-screen #course-header .course-extra ul li:hover {
        width: 75%; } }
        #layout-container #main-screen #course-header div {
          align-items: flex-start;
          flex-direction: column;
          justify-content: center; }
        @media (max-width: 1024px) {
          #layout-container #main-screen #course-header {
            padding-left: 15px; } }
        @media (max-width: 768px), (max-height: 375px), (max-width: 476px) {
          #layout-container #main-screen #course-header {
            flex-direction: column; } }
      #layout-container #main-screen #course-content {
        align-items: center;
        background-color: #ffffff48;
        flex: 2;
        justify-content: center;
        padding: 0 10%; }
        #layout-container #main-screen #course-content .slider-wrapper {
          flex-direction: row;
          height: 350px;
          overflow: hidden; }
          #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol {
            align-items: center;
            max-width: 75px;
            padding-bottom: 50px; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span {
              display: block;
              height: fit-content;
              position: relative;
              width: 100%; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i {
                align-items: center;
                color: #223c3f;
                cursor: pointer;
                display: flex;
                height: inherit;
                justify-content: center;
                position: relative; }
                #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol span i:hover:after {
                  animation-duration: 1s;
                  animation-iteration-count: infinite; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:after {
              content: '\f104';
              display: none;
              font-size: 2em; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:before {
              font-size: 4em; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:after {
              animation-delay: .2s;
              display: inline-block; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-left i:hover:after {
              animation-name: arrowFadeLeft; }
  
  @keyframes arrowFadeLeft {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1; }
    25% {
      transform: translateX(-100%); }
    37% {
      transform: translateX(-100%); }
    38% {
      transform: translateX(100%) scale(0.5);
      opacity: 0; }
    50% {
      opacity: 1; }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1; } }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:before {
              font-size: 2em;
              display: none; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:after {
              content: '\f105';
              font-size: 4em; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:before {
              animation-delay: .1s;
              display: inline-block; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:before, #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol.slider-navcontrol-right i:hover:after {
              animation-name: arrowFadeRight; }
  
  @keyframes arrowFadeRight {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1; }
    25% {
      transform: translateX(100%); }
    37% {
      transform: translateX(100%); }
    38% {
      transform: translateX(-100%) scale(0.5);
      opacity: 0; }
    50% {
      opacity: 1; }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1; } }
            @media (max-width: 1024px) {
              #layout-container #main-screen #course-content .slider-wrapper .slider-navcontrol {
                display: none;
                visibility: hidden; } }
          #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack {
            flex: 9;
            flex-grow: 3;
            justify-content: flex-start;
            overflow: hidden;
            padding-bottom: 50px; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-carousel {
              transform: translateX(0px);
              transition: transform 0.4s ease-in-out;
              z-index: 2; }
            #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item {
              background-color: #aea;
              flex: unset;
              flex-direction: column;
              justify-content: space-between;
              margin-right: 8px;
              position: relative;
              width: 220px; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item,
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item * {
                user-select: none; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item a {
                color: #223c3f;
                display: flex;
                flex-direction: column;
                height: 100%; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title {
                align-items: center;
                background-color: #e00;
                background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
                max-height: 60px;
                padding: 15px 0;
                position: relative; }
                #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title h3 {
                  color: #ffffff;
                  margin: 0 15px; }
                #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title:before {
                  background-image: linear-gradient(45deg, #a2041b calc(-100% - 52px), #fa455f calc(100% + 12px));
                  border-radius: 100% 0 0 0;
                  content: '';
                  height: 24px;
                  position: absolute;
                  right: 24px;
                  top: calc(100% - 12px);
                  transform: rotate(45deg);
                  width: 24px;
                  z-index: 2; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc {
                background-color: #ffffff;
                max-height: 45%;
                padding: 0 15px; }
                #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc .section-title-4 {
                  font-weight: 600; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number {
                align-items: center;
                background-color: #223c3f;
                border-radius: 100%;
                bottom: -28px;
                color: #ffffff;
                display: flex;
                flex: unset;
                float: left;
                height: 52px;
                justify-content: center;
                left: 24px;
                position: absolute;
                width: 52px;
                z-index: 1; }
                #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number span {
                  font-size: 25px;
                  font-weight: 300; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:after {
                background-color: #223c3f;
                bottom: -8px;
                height: 8px;
                content: '';
                left: 44px;
                position: absolute;
                width: calc(100% + 24px);
                z-index: 0; }
              #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:last-child:after {
                display: none; }
        @media (max-width: 1024px) {
          #layout-container #main-screen #course-content {
            padding: 0 10px; } }
        @media (max-width: 476px) {
          #layout-container #main-screen #course-content {
            margin-bottom: 60px; } }
    #layout-container div[id*="section-screen"] {
      flex-direction: column; }
      #layout-container div[id*="section-screen"] .go-back span {
        font-weight: 600; }
      @media (max-width: 476px) {
        #layout-container div[id*="section-screen"] .go-back button {
          height: auto; }
          #layout-container div[id*="section-screen"] .go-back button:before {
            font-size: 30px; } }
      #layout-container div[id*="section-screen"] .section {
        flex: 10;
        flex-direction: row;
        margin: 0 10%;
        padding: 0 50px;
        z-index: 2; }
        #layout-container div[id*="section-screen"] .section .section-data {
          flex: unset;
          flex-direction: column;
          width: 290px; }
          #layout-container div[id*="section-screen"] .section .section-data * {
            user-select: none; }
          #layout-container div[id*="section-screen"] .section .section-data .section-title {
            align-items: center;
            background-color: #a2041b;
            background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
            padding: 20px 10px;
            position: relative; }
            #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
              color: #ffffff;
              margin: 0 15px;
              margin-bottom: 15px; }
            #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
              background-image: linear-gradient(45deg, #ce243d -140%, #fa455f 50%, #fda2af 170%);
              border-radius: 0 0 0 100%;
              content: '';
              height: 24px;
              position: absolute;
              right: -12px;
              top: 25%;
              transform: rotate(45deg);
              width: 24px;
              z-index: 2; }
              @media (max-width: 1024px) {
                #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                  top: 16%; } }
              @media (max-width: 768px) {
                #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                  top: 20%; } }
            @media (max-height: 375px) {
              #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
                font-size: 30px; } }
          #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper {
            align-items: center;
            background-position: center;
            flex: 5;
            justify-content: center; }
            #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc {
              background-color: #ffffff;
              flex-direction: column;
              height: 65%;
              padding: 0 15px;
              position: relative; }
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*="section-title-"] {
                font-size: 24px;
                font-weight: 600; }
                @media (max-height: 375px) {
                  #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*="section-title-"] {
                    font-size: 18px; } }
              @media (max-width: 476px) {
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc:after {
                  background-color: #ffffff;
                  bottom: calc((30px / 2) * -1);
                  content: '';
                  height: 30px;
                  position: absolute;
                  right: 30px;
                  transform: rotate(45deg);
                  width: 30px; } }
            #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number {
              align-items: center;
              background-color: #223c3f;
              border-radius: 100%;
              bottom: calc(90% - 100%);
              color: #ffffff;
              display: flex;
              flex: unset;
              float: left;
              height: 95px;
              justify-content: center;
              left: 24px;
              position: absolute;
              width: 95px;
              z-index: 1; }
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number span {
                font-size: 47px;
                font-weight: 300; }
              @media (max-height: 375px) {
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number {
                  float: right;
                  height: 50px;
                  left: auto;
                  right: 24px;
                  width: 50px; }
                  #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number span {
                    font-size: 30px; } }
          @media (max-height: 375px) {
            #layout-container div[id*="section-screen"] .section .section-data {
              flex: 1; } }
        #layout-container div[id*="section-screen"] .section .section-content {
          background-color: #223c3f;
          flex: 2;
          flex-direction: column; }
          #layout-container div[id*="section-screen"] .section .section-content .tabs {
            align-items: stretch;
            background-color: #223c3f;
            color: #ffffff;
            flex: 1;
            flex-direction: row;
            justify-content: center;
            user-select: none; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs .tab {
              align-items: center;
              background-color: #ffffff88;
              cursor: pointer;
              justify-content: center;
              transition: background-color .2s ease-in-out; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs .tab [class*="section-title-"] {
                font-size: 22px;
                font-weight: 600;
                margin: 0 15px;
                transition: color .2s ease-in-out;
                text-transform: uppercase; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs .tab.active {
                background-color: transparent; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
                color: #a2041b; }
              @media (max-width: 1024px) {
                #layout-container div[id*="section-screen"] .section .section-content .tabs .tab [class*="section-title-"] {
                  font-size: 16px; } }
            @media (max-height: 375px) {
              #layout-container div[id*="section-screen"] .section .section-content .tabs {
                flex: 3; } }
            @media (max-width: 476px) {
              #layout-container div[id*="section-screen"] .section .section-content .tabs {
                flex: 2; } }
          #layout-container div[id*="section-screen"] .section .section-content .tabs-content {
            flex: 8;
            overflow-y: scroll;
            padding: 15px 0;
            position: relative; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content {
              bottom: 0;
              display: none;
              flex-direction: column;
              height: 100%;
              left: 0;
              margin: 0 40px;
              margin-left: 60px;
              padding: 40px 0;
              position: absolute;
              right: 0;
              top: 0; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-wrapper {
                align-items: stretch;
                flex-direction: column;
                justify-content: flex-start;
                flex: none; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources {
                flex-direction: column;
                justify-content: flex-start; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .separator,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .separator,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                  flex: unset;
                  flex-direction: row; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .separator,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .separator,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .separator {
                  color: #ffffff;
                  border-bottom: 1px solid #ffffff;
                  margin-bottom: 15px;
                  padding-bottom: 15px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                  align-items: center;
                  background-color: #ffffff;
                  cursor: pointer;
                  height: 63px;
                  margin-bottom: 20px;
                  padding-left: 55px;
                  transition-duration: .3s;
                  transition-property: background-color, color;
                  transition-timing-function: ease-in-out;
                  user-select: none; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                    background-color: #a2041b;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    box-shadow: 5px 0px 2px 1px #0000002e;
                    border-radius: 100%;
                    height: 74px;
                    position: absolute;
                    left: -30px;
                    width: 74px; }
                    @media (max-height: 1024px) {
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                        height: 56px;
                        width: 56px;
                        box-shadow: 3px 0px 2px 1px rgba(0, 0, 0, 0.18); } }
                    @media (max-height: 375px), (max-width: 476px) {
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img,
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img,
                      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
                        height: 48px;
                        width: 48px;
                        box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.18); } }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-buttons,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-buttons,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-buttons {
                    align-items: stretch;
                    justify-content: flex-end; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-lock:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-lock:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-lock:before {
                    background-image: url(images/padlock-sprite.png);
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: cover;
                    content: '';
                    display: block;
                    height: 25px;
                    transition: background-position 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
                    width: 20px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-lock.locked:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-lock.locked:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-lock.locked:before {
                    background-position: 0 -40px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-page-count,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-page-count,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-page-count {
                    font-size: 12px;
                    font-weight: 600;
                    margin: 0 10px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after {
                    background-image: linear-gradient(90deg, #a2041b 25%, #fa455f);
                    content: '';
                    height: 100%;
                    width: 20px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:active,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:active,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:active {
                    background-color: #fda2af;
                    color: #a2041b; }
                  @media (hover: hover) {
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
                      background-color: #fda2af;
                      color: #a2041b; } }
                  @media (max-height: 375px), (max-width: 476px) {
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item,
                    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item {
                      height: calc(48px + 5px); } }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources {
                color: #fff;
                font-weight: 300;
                opacity: 0.25;
                text-align: center; }
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item,
              #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item {
                height: 72px; }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-outer,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-outer {
                  left: calc(calc(72px/2) * -1);
                  height: 72px;
                  width: calc(72px/2);
                  background-image: linear-gradient(to bottom, #a2041b 50%, #fa455f 51%);
                  flex: none;
                  position: absolute;
                  clip-path: circle(calc(72px/2) at right);
                  -webkit-clip-path: circle(calc(72px/2) at right); }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .circle-inner,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .circle-inner {
                  left: calc(calc(calc(72px/2) - 4px) * -1);
                  height: calc(calc(calc(72px/2) - 4px) * 2);
                  width: calc(calc(72px/2) - 4px);
                  background-color: #223c3f;
                  flex: none;
                  position: absolute;
                  clip-path: circle(calc(calc(72px/2) - 4px) at right);
                  -webkit-clip-path: circle(calc(calc(72px/2) - 4px) at right); }
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img,
                #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img {
                  background-image: linear-gradient(to bottom, #a2041b 50%, #fa455f 51%);
                  box-shadow: none;
                  height: 58px;
                  width: 58px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img:before {
                    background-color: transparent;
                    background-image: url(images/resources-icons.png);
                    background-repeat: no-repeat;
                    background-size: 118px 60px;
                    content: '';
                    height: 30px;
                    transform: translate(50%, 50%);
                    transform-origin: center;
                    width: 30px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-2:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-2:before {
                    background-position: -89px 0px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-3:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-3:before {
                    background-position: -45px -31px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-5:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-5:before {
                    background-position: -45px 0px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-6:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-6:before {
                    background-position: -89px -31px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-7:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-7:before {
                    background-position: 0px -31px; }
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .unit-content .content-item .content-img.type-8:before,
                  #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.teacher-content .resources-content .content-item .content-img.type-8:before {
                    background-position: 0px 0px; }
            #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content.active {
              display: flex; }
        @media (max-width: 1024px) {
          #layout-container div[id*="section-screen"] .section {
            flex: 20;
            margin: 0;
            max-width: unset;
            padding: 0 2%; } }
        @media (max-width: 476px) {
          #layout-container div[id*="section-screen"] .section {
            align-items: stretch;
            flex-direction: column; }
            #layout-container div[id*="section-screen"] .section .section-data {
              flex: 1;
              width: auto; }
              #layout-container div[id*="section-screen"] .section .section-data .section-title {
                padding: 15px; }
                #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
                  font-size: 48px;
                  margin: 0; }
                #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
                  content: unset; }
              #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper {
                align-items: stretch;
                flex: 2;
                flex-direction: row; }
                #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc {
                  align-items: center;
                  flex-direction: row;
                  height: auto; }
                  #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc [class*=section-title-] {
                    flex: 5;
                    margin: 10px 0; }
                  #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc .section-number {
                    bottom: auto;
                    flex: initial;
                    float: none;
                    height: 60px;
                    left: auto;
                    position: relative;
                    width: 60px; }
                    #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc .section-number span {
                      font-size: 32px; } }
    #layout-container .section-navigation {
      background-color: rgba(103, 166, 173, 0.2);
      border: none;
      color: white;
      height: 145px;
      outline: none;
      position: absolute;
      top: calc(50% - (145px/2));
      transition-duration: .2s;
      transition-timing-function: ease-in-out;
      transition-property: background-color, color;
      width: 80px;
      z-index: 3; }
      #layout-container .section-navigation i {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%; }
        #layout-container .section-navigation i:before {
          font-size: 72px;
          vertical-align: middle; }
      #layout-container .section-navigation:hover {
        background-color: #ffffff;
        color: #223c3f; }
      #layout-container .section-navigation.left {
        border-radius: 0 calc(145px/2) calc(145px/2) 0;
        left: 0;
        transform-origin: left; }
      #layout-container .section-navigation.right {
        border-radius: calc(145px/2) 0 0 calc(145px/2);
        right: 0;
        transform-origin: right; }
      @media (max-width: 476px) {
        #layout-container .section-navigation {
          transform: scale(0.6); } }
    #layout-container *::-webkit-scrollbar {
      background: rgba(237, 237, 237, 0.25);
      width: 4px;
      height: 4px; }
    #layout-container *::-webkit-scrollbar-thumb {
      background-color: #A2041B;
      border-radius: 20px; }
    #layout-container *::-webkit-scrollbar-track {
      background-color: #ededed;
      border-radius: 20px; }
    #layout-container div {
      display: flex;
      flex: 1; }
    #layout-container:before {
      background-color: #223c3f77;
      bottom: 0;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      pointer-events: none; }
    @media (max-width: 768px) {
      #layout-container {
        overflow: auto; } }
  
  
    /************************
     * CSS AÑADIDO POR HTML *
     ************************/
     :root {
        --colordeg1:#4A4A4A;
        --colordeg2:#707070;
        --maincolor: #707070;
        --colorenlaces: #707070;
        --mainlight: #cecece;
     }
     
     /*Primera pantalla*/
     #layout-container .section-title-1 {
        font-size: 50px;
        font-weight: bold;
        font-family: 'Roboto Slab', serif;
    }
    #layout-container #main-screen #course-header .course-title span {
        font-size: 25px;
        line-height: 1.2em;
    }
     #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title {
        background: var(--colordeg1);
        max-height: 109px;
        word-break: break-word;
        -webkit-box-shadow: 0px 12px 12px 0px #5d5d5d75;
        -moz-box-shadow: 0px 12px 12px 0px #5d5d5d75;
        box-shadow: 0px 12px 12px 0px #5d5d5d75;
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title h3 {
        font-size: 22px;
        font-weight: bold;
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-desc {
        display: none;
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-title:before {
        background: var(--colordeg1);
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:after {
        display: none;
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item .section-number {
        display: none;
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item,
     #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item * {
      -moz-transition: box-shadow 0.2s ease-in-out;  
      -webkit-transition: box-shadow 0.2s ease-in-out;  
      transition: box-shadow 0.2s ease-in-out;  
    }
    #layout-container #main-screen #course-content .slider-wrapper .slider-itemtrack .slider-item:hover {
      -moz-box-shadow: 3px 5px 15px 0px var(--mainlight);
      -webkit-box-shadow: 3px 5px 15px 0px var(--mainlight);
      box-shadow: 3px 5px 15px 0px var(--mainlight);
    }
    body #layout-container #main-screen #course-header .course-title {
      justify-content: center;
    }

    /*SEGUNDA PANTALLA*/
    #layout-container div[id*="section-screen"] .section .section-data .section-title h1 {
      font-family: "Roboto", sans-serif;
      font-size: 34px;
      font-weight: 800;
      word-break: break-word;
      text-shadow: 0 0 7px #00000026;
    }
    #layout-container div[id*="section-screen"] .section .section-data .section-title {
        background-image: linear-gradient(90deg, var(--colordeg1) 25%, var(--colordeg2));
    }
    #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
        background: var(--colordeg2); 
    }
    #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-desc {
        display: none;
    } 
    #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper .section-number {
        display: none;
    }
    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-img, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-img, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-img {
        background-color: var(--maincolor);
    }
    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:after, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:after, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:after {
        background: var(--maincolor);
    }
    @media (hover: hover) {
    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item:hover, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item:hover, #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item:hover {
        background-color: var(--mainlight);
        color: var(--colordeg1);
    }
    }
    @media (hover: hover) {
    .go-back button:hover, #layout-container div.go-back button:hover {
        color: var(--mainlight);
    }
    }
    #layout-container div[id*="section-screen"] .section .section-content .tabs .tab:not(.active):hover [class*="section-title-"] {
      color: var(--colordeg1);
    }
    #layout-container .content-title span {
      font-weight: bold;
    }
    #layout-container *::-webkit-scrollbar-thumb {
      background-color: var(--maincolor);
    }
    /*Ruta para visualizar candados desde Github*/
    #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .unit-content .content-item .content-lock:before,
     #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .resources-content .content-item .content-lock:before,
      #layout-container div[id*="section-screen"] .section .section-content .tabs-content .content .no-resources .content-item .content-lock:before {
        background-image: url(/themes/responsive/assets/styles/generic/images/padlock-sprite.png); 
    }

    /*MENU Desplegable*/
    body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
    #book-index #indice .units ul li.active a {
    background: #fff;
    }
    body #book-index #indice .col-indice.col-main,
    body #book-index #indice .unit-content {
    background: var(--colordeg1);
    background: -moz-linear-gradient(0% 50% 0deg, var(--colordeg1) 0%, var(--colordeg2) 99.84%);
    background: -webkit-linear-gradient(0deg, var(--colordeg1) 0%, var(--colordeg2) 99.84%);
    background: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, var(--colordeg1)), color-stop(0.9984, var(--colordeg2)));
    background: -o-linear-gradient(0deg, var(--colordeg1) 0%, var(--colordeg2) 99.84%);
    background: -ms-linear-gradient(0deg, var(--colordeg1) 0%, var(--colordeg2) 99.84%);
    background: linear-gradient(90deg, var(--colordeg1) 0%, var(--colordeg2) 99.84%);
    }
    body #book-index #indice .unit-content a:hover, #book-index #indice li.current a {
    color: var(--mainlight);
    }
    body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled).active a,
    body #book-index #indice .units ul#list-units li:not(.disabled).active a {
      background: var(--colordeg1);
    }
    body:not(.isTablet) #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover,
     body #book-index #indice .units ul#list-units li:not(.disabled):not(.active) a:hover {
      background: var(--colordeg1); 
     }
    body #book-index #indice .unit-content .content .title-buttons .btn {
    border: 0;
    }
    #book-index #indice .unit-content .actividades .item:hover {
      opacity: 1;
    }
    body #book-index #indice .col-indice.col-main .unit-content .material .item .imagen:before {
      background-image: none;
    }
    #indice .units ul li a .title {
      color: #4a4a4a;
    }

    /*Loading - Pendiente cambiar por Coursetag*/ 
     .modal-backdrop {
         background-color: #707070 !important;
      }
     
    /*Boton de Cerrar el iframe del libro digital*/
     .btn-close-iframe a {
         color: #fff;
      }
      /*ENLACES*/     
      a:hover,
       a:active,
        a:focus {
        color: var(--maincolor);
        text-decoration: none;
      }
      #actividad .item-container a {
        text-decoration: underline;
      }
      .go-back button:active,
       #layout-container div.go-back button:active {
        color: var(--maincolor);
    }
      /* NAVBAR */
      .navbar-bottom .edit .slider-indicators .concat.active,
       .navbar-bottom .slider-indicators .active {
        background-color: #de768a;
      }
      /*Cambio NAVBAR GENERAL*/
      .libro-left ul li .title {
        background: var(--colordeg1);
      }
      .libro-right, .libro-left {
        background: var(--colordeg1);    
      }
      .body_clase .navbar.libro .libro-left {
        background: inherit !important;
      }
      .navbar.libro {
        background: var(--colordeg1) !important;
      }
      .libro-right ul li.close-back-wrapper:after, .navbar-divider:after {
        background-color: var(--colordeg1) !important;
      }
      .libro-right ul li.close-back-wrapper:before, .navbar-divider:before {
        background-color: var(--colordeg1) !important; 
      }

      /*------ HEADER ---------*/
      #actividad .content .header .title img {
        display: none;
      }
      #actividad .content .header .chapter {
        display: none;
      }
      body:not(.edit) #actividad .content .header {
        margin-bottom: 20px;
        background: var(--colordeg1);
        width: calc(100% + 120px);
        margin-left: -60px;
        padding-left: 60px;
        margin-top: -21px;
        color: white;
        padding-bottom: 5px;
        border-bottom: 0;
      }
      body:not(.edit) #actividad .content .header.empty {
        display: none;
      }
      #actividad .content .header .title {
        min-height: 37px;
        margin-bottom: 5px;
      }
      #actividad .content .header .title h3 {
        font-size: 2.7rem;
        display: inline-block;
        margin-bottom: 0;
        margin-top: 30px;
        vertical-align: bottom;
        font-weight: bold;
        padding-bottom: 5px;
      }
      #actividad .content .header.empty {
        display: none;
      }

     /*-------------------------*/
     /*------GENERALES----------*/
     /*--------------------------*/
     #actividad .class_slide {
      padding-bottom: 20px;
      padding-left: 60px;
      padding-right: 60px;
      padding-top: 20px;
    }
    #actividad .pregunta .texto_curso {
      font-size: inherit;
    }
    #actividad .carousel-inner .item-container {
      margin-top: 0;
      margin-bottom: 80px;
    }
    .body_clase.content_type_curso_Bromera2021Dev {
      font: 400 17px 'Roboto',sans-serif;
    }
    .texto_curso p {
      line-height: 1.7em!important;
      margin-bottom: 10px;
    }

    /*-------- TÍTULOS ----------*/
    .bck-title1,
    .bck-title2,
    .bck-title3,
    .bck-title4,
    .bck-title5 {
    background: none;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
    border-bottom: 2px solid;
    padding: 0px 0 5px 5px;
    width: 100%;
    }
    .bck-title1 {
    color: #de768a;
    }
    .bck-title2 {
    color: #62C3D6;
    }
    .bck-title3 {
    color: #DAE06C;
    }
    .bck-title4 {
    color: #706f6f;
    }
    .bck-title5 {
    color: #F4B806;
    }
    .bck-title6 {
    font-size: 24px;
    }
    .bck-title7 {
    font-size: 22px;
    }

     /*--------------------CAJAS PARA LA CABECERA-----------*/
        /* --- Ajuste en TEXTO CURSO para que se visualice la caja 1 correctamente con la plantilla de actividades*/
      .bck-box1 {
        background: #FBDC99;
        display: inline-block;
        padding: 20px 40px;
        border-radius: 94px;
        text-align: center;
        margin-right: 0;
        margin: 10px auto 20px;
      }
      .bck-box1 > .bck-title p {
        font-size: 27px;
        margin-bottom: 7px;
        font-weight: bold;
        font-family: 'RockwellStd', 'Roboto Slab', serif;
      }
      .bck-box1 > .bck-content p {
        font-family: "RockwellStd", "Roboto Slab", serif;
      }
      .bck-box2 {
        padding: 15px 20px;
        background: #D8D5DA;
        border: 3px solid #000000;
        border-radius: 26px;
        margin: 10px auto 20px;
      }
      .bck-box2 > .bck-title p {
        font-family: 'RockwellStd', 'Roboto Slab', serif;
      }
      .bck-box2 > .bck-content p {
        font-family: "RockwellStd", "Roboto Slab", serif;
      }
      .bck-box3 {
        background: #fff;
        margin-bottom: 30px;
        -webkit-box-shadow: 5px 8px 10px 5px #D7D7D7;
        box-shadow: 5px 5px 8px 5px #D7D7D7;
        background-image: -webkit-radial-gradient(#d6d5d6 30%, transparent 20%), -webkit-radial-gradient(#cfcfc3 38%, transparent 24%), -webkit-linear-gradient(top, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,0) 100%);
        background-image: -moz-radial-gradient(#d6d5d6 30%, transparent 20%), -moz-radial-gradient(#cfcfc3 38%, transparent 24%), -moz-linear-gradient(top, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,0) 95%, hsla(180,75%,50%,.1) 95%, hsla(180,75%,50%,.1) 100%);
        background-image: radial-gradient(#d6d5d6 30%, transparent 20%), radial-gradient(#cfcfc3 38%, transparent 24%), linear-gradient(top, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,0) 95%, hsla(180,75%,50%,.1) 95%, hsla(180,75%,50%,.1) 100%);
        background-position: 4px 1px, 4px 0px, 50% 0px;
        background-repeat: repeat-x, repeat-x, repeat;
        background-size: 30px 30px, 30px 30px, 30px 30px;
        padding: 38px 20px 20px 20px;
      }
      .bck-box4 {
        border: 11px solid #62c3d6;
        border-style: double;
        padding: 10px 20px;
        margin: 10px auto 20px;
      }
      .bck-box5 {
        background: var(--mainlight) ;
        margin: 10px auto 20px;
      }
      .bck-box .bck-box5 > .bck-title {
        background: var(--colordeg1);
        color: #fff;
        font-weight: bold;
        padding: 5px 20px;
      }
      .bck-box .bck-box5 > .bck-content {
        padding: 5px 20px;
      }
      .bck-box.bck-box6 {
        border: 2px solid var(--colordeg1);
        padding: 10px 20px;
        margin: 10px 0 20px;
      }
      .bck-box.bck-box6 > .bck-title {
        font-weight: bold;
        color: var(--colordeg1);
      }
      /*-*/
     /*-----------------------------------*/
     /*------- Listas ordenadas -----------*/
     
     /*Lista ordenada por defecto*/
     #actividad .content .cke_contents ol,
      #actividad .content .texto_curso ol,
       #actividad .content .workspace ul li ol,
        #actividad .popover-content ol {
         list-style-type: none;
         counter-reset: bck-li-counter;
     }
     #actividad .content .cke_contents ol li,
      #actividad .content .cke_contents ol li,
       #actividad .content .texto_curso ol li,
        #actividad .popover-content ol li,
         #actividad .content .workspace ul li ol li {
         counter-increment: bck-li-counter 1;
         position: relative;
         z-index: 0;
         margin-top: 10px;
         margin-left: -12px;
     }
     #actividad .content .cke_contents ol li::before,
      #actividad .content .texto_curso ol li::before,
       #actividad .popover-content ol li::before,
        #actividad .content .workspace ul li ol li::before {
         content: counter(bck-li-counter);
         width: 43px;
         height: 27px;
         position: absolute;
         font-size: 23px;
         font-weight: 700;
         color: #706F6F;
         background: none;
         margin-left: -43px;
         text-align: center;
     }

     /*Lista ordenada 1*/
     #actividad .content .cke_contents .bck-ol-1 li,
      #actividad .content .cke_contents .bck-ol-1 li,
       #actividad .content .texto_curso .bck-ol-1 li,
        #actividad .popover-content .bck-ol-1 li,
         #actividad .content .workspace ul li .bck-ol-1 li {
         margin-left: 5px;
     }
     #actividad .content .cke_contents .bck-ol-1 li:before,
     #actividad .content .texto_curso .bck-ol-1 li:before,
     #actividad .content .workspace ul li .bck-ol-1 li:before {
         content: counter(bck-li-counter, lower-alpha)')';
         color: #706F6F;
         font-weight: 700;
         font-size: 19px;
     }
     
     /*Lista desordenada*/
     .texto_curso ul li:before,
     .workspace ul li ul li:before,
     .cke_contents ul li:before {
         background-color: #737373;
         height: 8px;
         width: 8px;
         margin-top: 8px;
     }
     
     /*Lista desordenada 1*/
     .texto_curso .bck-ul-1 li:before,
     .workspace ul li .bck-ul-1 li:before,
     .cke_contents .bck-ul-1 li:before {
         background-color: #f4b705;
     }
    /*-----------------------------*/
    /* --------- Tablas ------------*/
     table td, th {
         padding: 8px;
     }
     table {
         table-layout: fixed;
         border: 3px solid #6A6E72;
     } 
     table td, th {
         border: 3px solid #6A6E72;
     }    
     table td.bck-td1 {
         background: #6A6E72;
         color: white;
     }
     table td.bck-td2 {
         background: #d2d2d2;
     }
     
     /*Tabla 1 AZUL*/   
     .bck-table1 {
         table-layout: fixed;
         border: 3px solid #62C3D5;
     } 
     .bck-table1 td, th {
         border: 3px solid #62C3D5;
     }   
     .bck-table1 td.bck-td1 {
         background: #62C3D5;
     }  
     .bck-table1 td.bck-td2 {
         background: #62c3d53b;
     }
     
     /*Tabla 2 Roja*/
     .bck-table2 {
         table-layout: fixed;
         border: 3px solid #DE7689;
     }
     .bck-table2 td, th {
         border: 3px solid #DE7689;
     } 
     .bck-table2 td.bck-td1 {
         background: #DE7689;
     } 
     .bck-table2 td.bck-td2 {
         background: #de768952;
     }
     
     /*Tabla 3 Amarilla*/    
     .bck-table3 {
         table-layout: fixed;
         border: 3px solid #F4B705;
     }  
     .bck-table3 td, th {
         border: 3px solid #F4B705;
     }   
     .bck-table3 td.bck-td1 {
         background: #F4B705;
     }  
     .bck-table3 td.bck-td2 {
         background: #f4b7054f;
     }
     
     /*Tabla 4 Verde*/    
     .bck-table4 {
         table-layout: fixed;
         border: 3px solid #D9DF6C;
     }   
     .bck-table4 td, th {
         border: 3px solid #D9DF6C;
     }  
     .bck-table4 td.bck-td1 {
         background: #D9DF6C;
     }  
     .bck-table4 td.bck-td2 {
         background: #d9df6c4f;
     }
     
     /*Tabla 5 sin bordes*/  
     .bck-table5 {
         table-layout: fixed;
         border: 0;
     }  
     .bck-table5 td, th {
         border: 0;
     }  
     .bck-table5 td.bck-td1 {
         background: none;
     }  
     .bck-table5 td.bck-td2 {
         background: none;
     }
    /*-*/
    /*--- ÉNFASIS ----*/ 
     /*Enfasis 1*/
     .bck-enfasis1 {
         font-family: "Roboto Slab", serif;
     }
     
     /*Énfasis 2*/
     .bck-enfasis2 {
         font-family: "Dekko", cursive;
     }
     
     /*Énfasis 3*/
     .bck-enfasis3 {
         font-family: "Roboto", sans-serif;
     }
     
     /*Énfasis 4*/
     .bck-enfasis4 {
         color: #de768a;
     }
     
     /*Énfasis 5*/
     .bck-enfasis5 {
         color: #62C3D6;
     }
     
     /*Énfasis 6*/
     .bck-enfasis6 {
         color: #DAE06C;
     }
     
     /*Énfasis 7*/
     .bck-enfasis7 {
         color: #F4B806;
     }
     
     /*Énfasis 8*/
     .bck-enfasis8 {
         color: #706f6f;
     }
    /*-*/
    /*--- OTROS ELEMENTOS CKEDITOR ---*/ 
     /*FLIPBOX*/
     body:not(.edit) .bck-flipbox {
     margin: 10px 0 15px; 
     }
     body:not(.edit) .bck-flipbox-face.front { 
      background: #fff;
      -moz-box-shadow: 3px 6px 7px #ababab;
      -webkit-box-shadow: 3px 6px 7px #ababab;
      box-shadow: 3px 6px 7px #ababab;
     }
     body:not(.edit) .bck-flipbox-face.back {
         border: var(--colordeg1) 1px solid;
         background-color: var(--colordeg1);
     }
     body:not(.edit) .front .bck-flipbox-title,
      body:not(.edit) .front .bck-flipbox-section {
        color: #4A4A4A;
        font-weight: bold;
     }
     body:not(.edit) .bck-flipbox-face.front,
      body:not(.edit) .bck-flipbox-face.back {
       border-color: var(--colordeg1)
     }
     /*Desplegable*/
     .bck-dropdown {
       margin: 10px 5px 15px;
    }
     .bck-dropdown-content {
      background-color: var(--mainlight);
    }
    /*Archivo adjunto*/
    .bck-file-attach span {
      vertical-align: middle;
      background: gainsboro;
    }
    #actividad .content .bck-file-attach img {
      filter: brightness(0);
      -webkit-filter: brightness(0);
    }
     /*POP UP*/
     #actividad .info-button {
         color: var(--maincolor);
         margin: 10px 5px;
         cursor: pointer;
     }
     
     /*Pop-Over desplegable*/
     .info-template .info-title {
         color: var(--colordeg1);
     }
     .info-template .info-icon {
         color: var(--colordeg1);
     }
     .info-popover .popover-title, .popover-template .popover-title {
         color: var(--colordeg1);
     }
     .info-popover .popover-title:before,
      .popover-template .popover-title:before {
         color: var(--colordeg1);
     }
    /*----*/ 

     /*ICONOS*/
     .item-container .icon:before {
        content: "";
        background-repeat: no-repeat;
        -webkit-background-size: auto 100%;
        -moz-background-size: auto 100%;
        -o-background-size: auto 100%;
        background-size: auto 100%;
        background-position: center center;
        display: inline-block;
        vertical-align: -webkit-baseline-middle;
         height: 52px;
         width: 100px;
        margin-top: 0px;
     }
     .item-container .icon-actfuerte:before {
         background-image: url(images/icono_test_fuerte.png);
         vertical-align: middle;
     }
     .item-container .icon-actflojo:before {
         background-image: url(images/icono_test_facil.png);
         vertical-align: middle;
     }
     .item-container .icon-semrojo:before {
         background-image: url(images/icono_circulo_rojo.png);
     }
     .item-container .icon-semverde:before {
         background-image: url(images/icono_circulo_verde.png);
     }
     .item-container .icon-semnaranja:before {
         background-image: url(images/icono_circulo_amarillo.png);
     }
     
     /*Icono audio por defecto*/
     #actividad .player.audio, #actividad .player.video, #help-panel-content .player, #remote-alert-modal-rich .player {
         height: 27px !important;
         width: 27px;
         display: inline-block;
         background-image: url(images/icono_audio_bromera.png);
         background-repeat: no-repeat;
         background-size: contain;
         background-position: center center !important;
         margin: 0 3px;
         vertical-align: middle;
         padding: 9px;
         background-color: transparent;
     }
     #actividad .player:hover, #help-panel-content .player:hover, #remote-alert-modal-rich .player:hover {
         background-color: transparent;
         transform: scale(1.2);
         filter: brightness(1.1);
     }
     
     /*BOTONES BLINK*/
     .btn {
      font-size: 17px;
     }
    body:not(.edit) .btn-danger,
    body:not(.edit) .btn-danger[disabled] {
      color: #fff;
      background-color: #de7689;
      border-color: transparent;
      border-radius: 0;
      background-color: transparent;
      color: black;
      border: 2px solid #ad0019;
    }
    body:not(.edit) .btn-danger:hover,
    body:not(.edit) .btn-danger:focus,
    body:not(.edit) .btn-danger:active,
    body:not(.edit) .btn-danger.active,
    body:not(.edit) .open .dropdown-toggle.btn-danger {
        background-color: #ad0019;
        color: #fff;
     }
     body:not(.edit) .btn-primary,
     body:not(.edit) .btn-primary.disabled,
     body:not(.edit) .btn-primary.disabled:hover,
     body:not(.edit) .btn-primary.disabled:focus {
        color: #fff;
        opacity: 1;
        border-radius: 0;
        background-color: transparent;
        border: 2px solid #de768a;
        color: black;
     }
     body:not(.edit) .btn-solution,
     body:not(.edit) .btn-solution.disabled,
     body:not(.edit) .btn-solution[disabled],
     body:not(.edit) .btn-next, 
     body:not(.edit) .btn-next.disabled, 
     body:not(.edit) .btn-next[disabled] {
        color: #fff;
        background-color: #00bdff;
        border-color: transparent;
        border-radius: 0;
     }
     body:not(.edit) .btn-primary:not([disabled]):hover,
     body:not(.edit) .btn-primary:not([disabled]):focus,
     body:not(.edit) .btn-primary:not([disabled]):active,
     body:not(.edit) .btn-primary.active, 
     body:not(.edit) .open .dropdown-toggle.btn-primary {
         background-color: #de768a;
     }
     #actividad .content .review .attemps span {
        background-color: rgba(255, 255, 255, 0);
        padding: 0px;
        margin: 0px;
        font-size: 28px;
        color: #de768a;
     }
     body:not(.edit) .btn-primary[disabled],
     body:not(.edit) .btn-primary[disabled]:focus {
        color: black;
        background-color: transparent;
        border-color: #cd7184;
      }
     
     /*-------------CAMBIOS EN PLANTILLAS-----------------*/
     
     /*Plantillas generales*/
     #actividad .pregunta .texto_curso {
         font-size: inherit;
     }
     #actividad .workspace {
         font-size: inherit;
     }
     
     /*Nota de la actividad*/
     .nota-budget {
         height: 51px;
         z-index: 5;
     }
     
     /*Colores respuestas y soluciones
     CUIDADO CON LOS IMPORTANT, HAY QUE PEDIR QUE LOS QUITEN Y QUE NO PISEN LAS CLASES MÁS ESPECIFICAS*/
     #actividad .respuesta_ok {
         background: #C2EC9D;
         border-color: #C2EC9D;
     }
     #actividad .respuesta_ko {
         background: #f7808d;
         border-color:#f7808d;
     }
     #actividad .solucion {
         background: #A8E8FF;
         border-color:#A8E8FF;
     }
     #actividad .workspace .opcion {
         border: 3px solid #bdbdbd !important;
         border-radius: 0 !important;
         padding: 10px 50px !important;
     }
     #actividad .workspace .opcion:hover {
         background-color: #dfdfdf9c  !important;
     }
     #actividad .workspace .respuesta_checked {
         background-color: #bdbdbd !important;
     }
     
     /*Inputs*/
     .slide_main input, .slide_main .img-input-container {
         border: 3px solid #CCC;
         border-bottom-color: #CCC;
     }
     .shortanswer-container textarea:focus, .shortanswer-container input:focus,
      .shortanswer-container .preview:focus {
      border-color: var(--colordeg1);
      box-shadow: 0 0 2px var(--colordeg1);
      }
     
     /*PLANTILLA ORDENAR ACTIVIDAD*/
     #actividad .workspace.ordenar .js-rank-item {
         border: 0;
         border-radius: 0;
         margin: 12px;
         box-shadow: 2px 4px 6px 0px #757575b5;
     }
     
     /*Plantilla verdadero o falso*/
     .workspace.true-false {
         text-align: center;
     }
     body:not(.edit) #actividad .item-container .checkbox-option label.filter-label:before,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkSelfCorrect label:before,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkEvaluation label:before,
     body:not(.edit) #actividad .item-container .radio-option label.filter-label:before {
         display: inline-block;
         left: -3px;
         position: relative;
         width: 19px;
         vertical-align: sub;
             filter: hue-rotate(262deg) saturate(0.8);
     }
     body:not(.edit) #actividad .item-container .checkbox-option label.filter-label,
     body:not(.edit) #actividad .item-container .checkbox-option label.filter-label-append,
     body:not(.edit) #actividad .item-container .radio-option label.filter-label {
         font-size: inherit;
       }
     
     #actividad .workspace.true-false li {
         margin-bottom: 36px;
         padding: 22px 0px 0px 0px;
     }
     
     /*Plantilla test*/
     body:not(.edit) #actividad .item-container .checkbox-option input.filter-checkbox[type="checkbox"]+label.filter-label,
     body:not(.edit) #actividad .item-container .radio-option input.filter-radio[type="radio"]+label.filter-label {
       display: block;
     }
     body:not(.edit) #actividad .item-container .checkbox-option label.filter-label:before,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkSelfCorrect label:before,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkEvaluation label:before,
     body:not(.edit) #actividad .item-container .radio-option label.filter-label:before {
         display: inline-block;
         left: -3px;
         position: relative;
         width: 19px;
         vertical-align: sub;
             filter: hue-rotate(262deg) saturate(0.8);
      }
     #actividad .workspace.test .respuestas {
         margin-top: .8em;
         margin-bottom: 15px;
         padding-bottom: 1px;
         text-align: center;
     }
     #actividad .workspace.test .un_ejercicio {
         padding: 22px 0px 0px 0px;
         margin: 10px 0;
     }
     body:not(.edit) #actividad .item-container .checkbox-option input.filter-checkbox[type="checkbox"]:checked+label.filter-label,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkSelfCorrect label,
     body:not(.edit) #actividad .item-container .slides_averages #cont_checkEvaluation label,
     body:not(.edit) #actividad .item-container .radio-option input.filter-radio[type="radio"]:checked+label.filter-label {
         background: #bdbdbd;
      }
     
      body:not(.edit) #actividad .item-container .checkbox-option input.filter-checkbox[type="checkbox"]+label.filter-label,
      body:not(.edit) #actividad .item-container .radio-option input.filter-radio[type="radio"]+label.filter-label {
         padding: 8px 25px;
         border: 3px solid #bdbdbd;
     }
     
     body:not(.edit) #actividad .item-container .checkbox-option input.filter-checkbox[type="checkbox"]+label.filter-label:hover,
     body:not(.edit) #actividad .item-container .radio-option input.filter-radio[type="radio"]+label.filter-label:hover {
         background: #dfdfdf9c;
     }
        
     /*Plantilla respuesta mútliple*/
     body:not(.edit) #actividad .workspace.multiple-choice .opcion p {
         padding: 5px;
         text-align: center;
     }
     
     /*Rellenar espacios*/
     .fillblanks-draggable-wrapper .response p {
         font-size: 18px;
     }
     .fillblanks-draggable-wrapper .response {
         border: 3px solid #bdbdbd;
         -webkit-border-radius: 0px;
         -moz-border-radius: 0px;
         border-radius: 0px;
     }
     /*Plantilla cálculo*/
     .workspace.calculo table td, th {
      border: 0;
     }
     .workspace.calculo table.marco {
      border: 0;
    }
    .workspace.calculo table {
      border: 0;
    }

     

     
     /*------------------------------------------------------------*/
     /*---------------FIN ESTILO GENERAL---------------------------*/
     /*-----------------------------------------------------------*/
      /*--------- unittag_bromeraescolar2020 -----------------------------*/
      /* Cambia la tipografía del libro*/
      .body_clase.content_type_curso_Bromera2021Dev.unittag_bromeraescolar2020  {
        font: 400 22px 'Dekko',sans-serif;
      }    
      .unittag_bromeraescolar2020 p {
        font-size: 22px;
        font-family: 'Dekko', sans-serif;
      }    
      .unittag_bromeraescolar2020 .texto_curso p {
       line-height: 1.8em!important;
      }   
      .unittag_bromeraescolar2020 .bck-box1 .bck-title p,
      .unittag_bromeraescolar2020 .bck-box2 .bck-title p,
      .unittag_bromeraescolar2020 .bck-box3 .bck-title p,
      .unittag_bromeraescolar2020 .bck-box4 .bck-title p{
       font-family: "Dekko", sans-serif;
      }
      .unittag_bromeraescolar2020 .bck-box1 .bck-content p,
      .unittag_bromeraescolar2020 .bck-box2 .bck-content p,
      .unittag_bromeraescolar2020 .bck-box3 .bck-content p,
      .unittag_bromeraescolar2020 .bck-box4 .bck-content p {
        font-family: "Dekko", sans-serif;
        font-size: 22px;
      }
     
     /*-----------CAMBIOS por activitytag_---------------------------------------*/
     /* RETO AZUL activitytag_repteazul*/
     .activitytag_repteazul .bck-box1 {
         border-left-color: #62C3D6;
     }
     body:not(.edit).coursetag_bromeramusica.activitytag_repteazul #actividad .content .header {
        border-left-color: #62C3D6;
     }
     
     /* RETO VERDE activitytag_repteverde*/
     .activitytag_repteverde .bck-box1 {
         border-left-color: #DAE06C;
     }
     body:not(.edit).coursetag_bromeramusica.activitytag_repteverde #actividad .content .header {
        border-left-color: #DAE06C;
     }
     
     /* RETO ROJO activitytag_repterojo*/
     .activitytag_repterojo .bck-box1 {
         border-left-color: #DE768A;
     }
     body:not(.edit).coursetag_bromeramusica.activitytag_repterojo #actividad .content .header {
        border-left-color: #DE768A;
     }
     
     /*----------- CAMBIOS por unittag_---------------------------------------*/
     
     /*Proyecto 2 - unittag_project2*/
     .unittag_project2 .bck-box1 {
         background: #62C3D6;
     }
     body:not(.edit).coursetag_bromeramusica.unittag_project2 #actividad .content .header {
        background-color: #62C3D6;
     }
     .unittag_project2 .bck-box7,
     .unittag_project2 .bck-box8 {
         background: #DAE06C;
     }
     body:not(.edit).coursetag_bromeramusica.unittag_project2 #actividad .content .intro .header, 
        body:not(.edit).coursetag_bromeramusica.unittag_project2 #actividad .content .trimestre .header {
        background-color: #DAE06C;
     }
     .unittag_project2 .bck-box9 {
        border-left-color: #DAE06C ;
     }
     body:not(.edit).coursetag_bromeramusica.unittag_project2 #actividad .content .ralli .header {
        border-left-color: #DAE06C ;
  }
     
     /*Proyecto 3 - unittag_project3*/
     .unittag_project3 .bck-box1 {
         background: #DAE06C;
     }
     body:not(.edit).coursetag_bromeramusica.unittag_project3 #actividad .content .header {
        background-color: #DAE06C;
     }
     .unittag_project3 .bck-box7,
     .unittag_project3 .bck-box8 {
         background: #DE768A;
     }
      body:not(.edit).coursetag_bromeramusica.unittag_project3 #actividad .content .intro .header, 
      body:not(.edit).coursetag_bromeramusica.unittag_project3 #actividad .content .trimestre .header {
         background-color: #DE768A;
     }
     .unittag_project3 .bck-box9 {
         border-left-color: #DE768A ;
     }
     body:not(.edit).coursetag_bromeramusica.unittag_project3 #actividad .content .ralli .header {
        border-left-color: #DE768A ;
  }
     

     /* --------- Cambios por SECCIONES ---------- */
     /* Seccion "periodistes" */
     body:not(.edit).coursetag_bromeramusica #actividad .content .periodistes .header {
        border-left-color: #6A6E72;
        background-color: #F4B806;  
    }
    body:not(.edit).coursetag_bromeramusica #actividad .content .periodistes .header:before {
        background-image: url(images/icono_periodistas_musicales.jpg);
    }
    /* Seccion "trimestre" */
    body:not(.edit).coursetag_bromeramusica #actividad .content .trimestre .header {
        border-left-color: #6A6E72;
        background-color: #62C3D6;  
    } 
    body:not(.edit).coursetag_bromeramusica #actividad .content .trimestre .header:before {
        background-image: url(images/icono_valore_trimestre.jpg);
    } 
    /* Seccion "ralli" */
    body:not(.edit).coursetag_bromeramusica #actividad .content .ralli .header {
        border-left-color: #62C3D6;
        background-color: #F2F1F3;  
    }
    body:not(.edit).coursetag_bromeramusica #actividad .content .ralli .header:before {
        background-image: url(images/icono_rali.jpg);
    }
    /* Seccion "intro" */
    body:not(.edit).coursetag_bromeramusica #actividad .content .intro .header {
        border-left: 0;
        background-color: var(--colordeg1);  
        padding-left: inherit;
    }  
    body:not(.edit).coursetag_bromeramusica #actividad .content .intro .header:before {
        background-image: none;
    }    

     /*Cambios por coursetags*/
    /*--------------------------------COURSETAG coursetag_bromeramusica-----------------------------------------------*/
    .coursetag_bromeramusica {
      --colordeg1:#1ab7ce;
      --colordeg2: #67CFDA;
      --maincolor: #67CFDA;
      --mainlight: #D1F7FF;
    }
    .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .desc-wrapper {
      display: none;
    }
    .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .section-title {
      background: url(images/bromera_fondo_azul_resized.jpg);
      background-size: cover;;
      align-items: start;
    }
    .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
      background: #4ccde0;
    }
    .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
      content: "";
      background-image: url(images/mascota_rana.png);
      padding: 170px 100px;
      position: absolute;
      bottom: 0px;
      background-size: contain;
      background-repeat: no-repeat;
      left: 32px;
    }
        /*Cambios en el Header*/
        body:not(.edit).coursetag_bromeramusica #actividad .content .header {
            border-left: 109px solid;
            border-color: #F4B806;
            min-height: 100px;
            position: relative;
            font-family: 'Roboto Slab';
            color: #414141;
            padding-left: 20px;
            display: flex;
            align-items: center;
            padding: 10px 10px;
            background-color: #DE768A; 
        }
        body:not(.edit).coursetag_bromeramusica #actividad .content .header:before {
            content: "";
            background-image: url(images/icono_diana.png);
            background-size: contain;
            padding: 40px;
            position: absolute;
            background-repeat: no-repeat;
            background-position: center left;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            left: -94px;
            height: 50px;
        }
        body:not(.edit).coursetag_bromeramusica #actividad .content .header .title {
            margin-bottom: 0;
            flex-grow: 4;
        }
        .coursetag_bromeramusica #actividad .content .header .title h3 {
            font-size: 29px;
            margin-bottom: 0;
            margin-top: 0;
            padding-bottom: 5px;
        }
        body:not(.edit).coursetag_bromeramusica #actividad .content .header:after {
            content: "";
            position: relative;
            padding: 20px 54px;
            background-image: url(images/logo_bromera_musica.png);
            background-repeat: no-repeat;
            background-size: 100px;
            background-position: center right;
            margin-right: 40px;
            margin-top: -9px;
        }
        @media (max-width: 767px) {
            .coursetag_bromeramusica #actividad .content .header .title h3 {
                font-size: 24px;
            }
        }
        @media (max-width: 480px) {
            body:not(.edit).coursetag_bromeramusica #actividad .content .header:after {
                display: none;
        }
        }
        /*-*/

    .body_clase.content_type_curso_Bromera2021Dev.coursetag_bromeramusica {
      font: 400 19px 'Roboto',sans-serif;
    }
    .coursetag_bromeramusica .bck-title1,
    .coursetag_bromeramusica .bck-title2,
    .coursetag_bromeramusica .bck-title3,
    .coursetag_bromeramusica .bck-title4,
    .coursetag_bromeramusica .bck-title5 {
      font-size: 30px;
    }
  
     /*--------------------------------COURSETAG coursetag_bromeramusicaverde-----------------------------------------------*/
     .coursetag_bromeramusicaverde {
      --colordeg1:#b3b944;
      --colordeg2: #e1e682;
     --maincolor: #e1e682;
     --mainlight: #fdffc9;
    }
    .coursetag_bromeramusicaverde #layout-container div[id*="section-screen"] .section .section-data .section-title {
      background: url(images/bromera_fondo_verde_resized.jpg);
    }
    .coursetag_bromeramusicaverde #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
      background: #e1e495;
    }
    /*--------------------------------COURSETAG coursetag_bromeramusicanaranja-----------------------------------------------*/
    .coursetag_bromeramusicanaranja {
    --colordeg1:#ee9820;
    --colordeg2: #ffcc6f;
    --maincolor: #ffcc6f;
    --mainlight: #ffe6b8;
    }
    .coursetag_bromeramusicanaranja #layout-container div[id*="section-screen"] .section .section-data .section-title {
    background: url(images/bromera_fondo_naranja_resized.jpg);
    }
    .coursetag_bromeramusicanaranja #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
    background: #ffd17c;
    }
    /*--------------------------------COURSETAG coursetag_bromeramusicarosa-----------------------------------------------*/
    .coursetag_bromeramusicarosa {
      --colordeg1:#dd768b;
      --colordeg2: #ffb4c3;
      --maincolor: #ffb4c3;
      --mainlight: #ffd6df;
    }
    .coursetag_bromeramusicarosa #layout-container div[id*="section-screen"] .section .section-data .section-title {
      background: url(images/Bromera_musicaprim_Fondo_rosa_resized.jpg);
    }
    .coursetag_bromeramusicarosa #layout-container div[id*="section-screen"] .section .section-data .section-title:before {
      background: #f0b0c0;
    }
     
     /*--------------------------------COURSETAGS CAMBIO DE MASCOTA EN SEGUNDA PANTALLA---------------------------------*/
     /*Superheroina*/
     .coursetag_heroina #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
         background-image: url(images/mascota_superheroina.png);
     }
     /*Loro*/
     .coursetag_loro #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
         background-image: url(images/mascota_loro.png);
         padding: 171px 130px;
     }
     @media (max-height: 700px) {
      .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
       padding: 78px 59px;
       }
    }
     /*Cantante*/
     .coursetag_cantante #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
        background-image: url(images/mascota_cantante_1.png);
        padding: 165px 100px;
     }
     
     /*Pirata 1*/
     .coursetag_pirata1 #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
         background-image: url(images/mascota_pirata_1.png);
     }
     
     /*Pirata 2*/
     .coursetag_pirata2 #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
         background-image: url(images/mascota_pirata_2.png);
     }
     
     /*------------------------------------------
     ------------------MEDIA QUERIES--------------
     -------------------------------------------*/
    @media (max-width: 767px) {
    .abp-section_unit-inner .abp-section-header-bottom {
        visibility: hidden;
    }
    .abp-section_unit-inner .abp-section-header::before {
        border-top: 20px solid;
    }
    .body_clase #actividad .carousel-inner .item-container {
      margin-top: 0;
    }
    }
    @media (max-height: 700px) {
      .coursetag_bromeramusica #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
       padding: 90px 59px;
       right: 0;
       left: auto;
       }
    }
    @media (max-width: 579px) {
    .body_clase #actividad .carousel-inner .item-container {
      margin-top: 0;
    }
    } 

     @media (max-width : 480px) {
        #actividad .class_slide {
          padding-left: 40px;
          padding-right: 40px;
        }
        body:not(.edit) #actividad .content .header {
          width: calc(100% + 80px);
          margin-left: -40px;
          padding-left: 40px;
        }     
        .abp-section_unit-inner .abp-section-header-top::after {
           display: none;
        }
        #actividad .workspace .opcion {
           padding: 10px 5px !important;
        }
     }
     
     @media (max-width: 476px) {
      #layout-container div[id*="section-screen"] .section .section-data {
        flex: 0;
      }    
      #layout-container div[id*="section-screen"] .section .section-data .section-title:after {
              display: none !important;
          }
     }



    @media (max-height: 375px), (max-width: 476px) {
      #layout-container #main-screen #course-header .course-title span {
        font-size: 17px;
        line-height: 1.2em;
    }
      #layout-container #main-screen #course-header .course-title [class*=section-title-] {
        font-size: 25px;
    }
    }

     /************************
     * CSS AÑADIDO POR HTML *
     ************************/
  /*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZW5lcmljL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLDZCQUE2QixFQUFFO0FBQy9CO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLGtDQUFrQyxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLDRDQUE0QztBQUM1QztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUU7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixFQUFFO0FBQ3hCO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiAgIEltcG9ydHMgZGUgdG9kb3MgbG9zIGFyY2hpdm9zIGRlIGVzdGlsb3NcbiovXG4vKlxuKiAgIFZhcmlhYmxlcyBnbG9iYWxlcyBwYXJhIGVsIGVzdGlsb1xuKi9cbi8qICoqKioqKioqKiogL1xuLyAgIENPTE9SUyAgICAvXG4vICoqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKiAvXG4vICAgREVWSUNFIEJSRUFLUE9JTlQgICAgL1xuLyAqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKiogL1xuLyAgIFNUWUxFUyAgICAvXG4vICoqKioqKioqKiogKi9cbi8qICoqKioqKioqKiogL1xuLyAgR1JBRElFTlRTICAvXG4vICoqKioqKioqKiogKi9cbi8qIEJsaW5rIEVsZW1lbnRzICovXG4ubmF2YmFyLmxpYnJvIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG5ib2R5Om5vdCguaXNUYWJsZXQpICNib29rLWluZGV4ICNpbmRpY2UgLnVuaXRzIHVsI2xpc3QtdW5pdHMgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG5ib2R5ICNib29rLWluZGV4ICNpbmRpY2UgLnVuaXRzIHVsI2xpc3QtdW5pdHMgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiAjYTIwNDFiOyB9XG5cbmJvZHk6bm90KC5pc1RhYmxldCkgI2Jvb2staW5kZXggI2luZGljZSAudW5pdHMgdWwjbGlzdC11bml0cyBsaTpub3QoLmRpc2FibGVkKTpub3QoLmFjdGl2ZSkgYTpob3ZlcixcbmJvZHkgI2Jvb2staW5kZXggI2luZGljZSAudW5pdHMgdWwjbGlzdC11bml0cyBsaTpub3QoLmRpc2FibGVkKTpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjZTI0M2Q7IH1cblxuYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EyMDQxYiwgI2ZhNDU1Zik7XG4gIG9wYWNpdHk6IDE7IH1cbiAgYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiBsaS5jdXJyZW50IGEsXG4gIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgYm9keSAjYm9vay1pbmRleCAjaW5kaWNlIC5jb2wtbWFpbiAudW5pdC1jb250ZW50IC5tYXRlcmlhbCAuaXRlbSAuaW1hZ2VuLmxpYnJvOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9jb250ZW5pZG8vcmVjdXJzby1iZy1saWJyby5qcGcpOyB9XG4gIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gLnVuaXQtY29udGVudCAubWF0ZXJpYWwgLml0ZW0gLmltYWdlbi52aWRlbzpiZWZvcmUsIGJvZHkgI2Jvb2staW5kZXggI2luZGljZSAuY29sLW1haW4gLnVuaXQtY29udGVudCAubWF0ZXJpYWwgLml0ZW0gLmltYWdlbi5tdXNpY2E6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2NvbnRlbmlkby9yZWN1cnNvLWJnLW11bHRpbWVkaWEuanBnKTsgfVxuXG4uc2xpZGVyLWNvbnRyb2wsXG4jc3dpcGV2aWV3LXNsaWRlciB7XG4gIHotaW5kZXg6IDI7IH1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuY29udGVudC13cmFwcGVyICNhY3RpdmlkYWQgLmNvbnRlbnQsXG4gIC5jb250ZW50LXdyYXBwZXIgI3N3aXBldmlldy1zbGlkZXIgPiBkaXZbaWQqPXN3aXBldmlldy1tYXN0ZXJwYWdlLV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5jb250ZW50LXdyYXBwZXIgI2FjdGl2aWRhZCAuY29udGVudCAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyB9XG4gIC5jb250ZW50LXdyYXBwZXI6bm90KC5saWJybyk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmNzc7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uc2xpZGVyLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmOyB9XG5cbi5uYXZiYXItYm90dG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjsgfVxuICAubmF2YmFyLWJvdHRvbSAuZWRpdCAuc2xpZGVyLWluZGljYXRvcnMgLmNvbmNhdC5hY3RpdmUsXG4gIC5uYXZiYXItYm90dG9tIC5zbGlkZXItaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIwNDFiO1xuICAgIGNvbG9yOiAjMjIzYzNmOyB9XG5cbi5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi53aWRnZXRCYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBMYXlvdXQgKi9cbi5nby1iYWNrLFxuI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmxleDogbm9uZTsgfVxuICAuZ28tYmFjayBidXR0b24sXG4gICNsYXlvdXQtY29udGFpbmVyIGRpdi5nby1iYWNrIGJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgLmdvLWJhY2sgYnV0dG9uIHNwYW4sIC5nby1iYWNrIGJ1dHRvbjpiZWZvcmUsXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uIHNwYW4sXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgLmdvLWJhY2sgYnV0dG9uIHNwYW4sXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAuZ28tYmFjayBidXR0b246YmVmb3JlLFxuICAgICNsYXlvdXQtY29udGFpbmVyIGRpdi5nby1iYWNrIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcXDIwMzlcIjtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07IH1cbiAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgLmdvLWJhY2sgYnV0dG9uOmhvdmVyLFxuICAgICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNjZTI0M2Q7IH0gfVxuICAgIC5nby1iYWNrIGJ1dHRvbjphY3RpdmUsXG4gICAgI2xheW91dC1jb250YWluZXIgZGl2LmdvLWJhY2sgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgY29sb3I6ICNjZTI0M2Q7IH1cblxuI2xheW91dC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAqIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMSxcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMixcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtMyxcbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtNCxcbiAgI2xheW91dC1jb250YWluZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi10aXRsZS0xIHtcbiAgICBmb250LXNpemU6IDYwcHg7IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUtNCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyB9XG4gICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmNTU7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMTAlICsgNzVweCk7XG4gICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtOyB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtdGl0bGUgW2NsYXNzKj1zZWN0aW9uLXRpdGxlLV0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IH0gfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4OyB9IH1cbiAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCksIChtYXgtd2lkdGg6IDQ3NnB4KSB7XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIFtjbGFzcyo9c2VjdGlvbi10aXRsZS1dIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLXRpdGxlIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7IH0gfVxuICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEgdWwge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2NlMjQzZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UtaW47IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciAuY291cnNlLWV4dHJhIHVsIGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSBhIHNwYW4ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTphY3RpdmUge1xuICAgICAgICAgICAgICB3aWR0aDogNzUlOyB9XG4gICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTpob3ZlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTsgfSB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIC5jb3Vyc2UtZXh0cmEgdWwgbGkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaSBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkgYW5kIChob3ZlcjogaG92ZXIpIHtcbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1oZWFkZXIgLmNvdXJzZS1leHRyYSB1bCBsaTpob3ZlciB7XG4gICAgICB3aWR0aDogNzUlOyB9IH1cbiAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWhlYWRlciBkaXYge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7IH0gfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSwgKG1heC1oZWlnaHQ6IDM3NXB4KSwgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtaGVhZGVyIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDg7XG4gICAgICBmbGV4OiAyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDEwJTsgfVxuICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sIHNwYW4gaSB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wgc3BhbiBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sIHNwYW4gaTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1sZWZ0IGk6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjEwNCc7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCBpOmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1sZWZ0IGk6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtbGVmdCBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLWxlZnQgaTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYXJyb3dGYWRlTGVmdDsgfVxuXG5Aa2V5ZnJhbWVzIGFycm93RmFkZUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gIDM3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAzOCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLW5hdmNvbnRyb2wuc2xpZGVyLW5hdmNvbnRyb2wtcmlnaHQgaTpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLXJpZ2h0IGk6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjEwNSc7XG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1yaWdodCBpOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC4xcztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbC5zbGlkZXItbmF2Y29udHJvbC1yaWdodCBpOmhvdmVyOmJlZm9yZSwgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1uYXZjb250cm9sLnNsaWRlci1uYXZjb250cm9sLXJpZ2h0IGk6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFycm93RmFkZVJpZ2h0OyB9XG5cbkBrZXlmcmFtZXMgYXJyb3dGYWRlUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgMzclIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgMzglIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDAuNSk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItbmF2Y29udHJvbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfSB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIHtcbiAgICAgICAgICBmbGV4OiA5O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItY2Fyb3VzZWwge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYTtcbiAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4OyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0sXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gKiB7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2EyMDQxYiAyNSUsICNmYTQ1NWYpO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gLnNlY3Rpb24tdGl0bGUgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2EyMDQxYiBjYWxjKC0xMDAlIC0gNTJweCksICNmYTQ1NWYgY2FsYygxMDAlICsgMTJweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDEycHgpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciAjbWFpbi1zY3JlZW4gI2NvdXJzZS1jb250ZW50IC5zbGlkZXItd3JhcHBlciAuc2xpZGVyLWl0ZW10cmFjayAuc2xpZGVyLWl0ZW0gLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1JTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1kZXNjIC5zZWN0aW9uLXRpdGxlLTQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1udW1iZXIge1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzNmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3R0b206IC0yOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleDogdW5zZXQ7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbSAuc2VjdGlvbi1udW1iZXIgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItaXRlbXRyYWNrIC5zbGlkZXItaXRlbTphZnRlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjNjM2Y7XG4gICAgICAgICAgICAgIGJvdHRvbTogLThweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBsZWZ0OiA0NHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyNHB4KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1pdGVtdHJhY2sgLnNsaWRlci1pdGVtOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyICNtYWluLXNjcmVlbiAjY291cnNlLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDsgfSB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgI21haW4tc2NyZWVuICNjb3Vyc2UtY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfSB9XG4gICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuZ28tYmFjayBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuZ28tYmFjayBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5nby1iYWNrIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfSB9XG4gICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIHtcbiAgICAgIGZsZXg6IDEwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogMCAxMCU7XG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSB7XG4gICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjkwcHg7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgKiB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyMDQxYjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNhMjA0MWIgMjUlLCAjZmE0NTVmKTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUgaDEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjY2UyNDNkIC0xNDAlLCAjZmE0NTVmIDUwJSwgI2ZkYTJhZiAxNzAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwMCU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNiU7IH0gfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7IH0gfVxuICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5zZWN0aW9uLXRpdGxlIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9IH1cbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogNTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciAuc2VjdGlvbi1kZXNjOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygoMzBweCAvIDIpICogLTEpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyB9IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IGNhbGMoOTAlIC0gMTAwJSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiB1bnNldDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0N3B4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDM3NXB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfSB9XG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpIHtcbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSB7XG4gICAgICAgICAgICBmbGV4OiAxOyB9IH1cbiAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyAudGFiIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicyAudGFiIFtjbGFzcyo9XCJzZWN0aW9uLXRpdGxlLVwiXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYi5hY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYjpub3QoLmFjdGl2ZSk6aG92ZXIgW2NsYXNzKj1cInNlY3Rpb24tdGl0bGUtXCJdIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhMjA0MWI7IH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMgLnRhYiBbY2xhc3MqPVwic2VjdGlvbi10aXRsZS1cIl0ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfSB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCkge1xuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMge1xuICAgICAgICAgICAgICBmbGV4OiAzOyB9IH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzIHtcbiAgICAgICAgICAgICAgZmxleDogMjsgfSB9XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQge1xuICAgICAgICAgIGZsZXg6IDg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgZmxleDogbm9uZTsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50LFxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQsXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuc2VwYXJhdG9yLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsZXg6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5zZXBhcmF0b3IsXG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyMDQxYjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAycHggMXB4ICMwMDAwMDAyZTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc0cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NHB4OyB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcsXG4gICAgICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggMHB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KTsgfSB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDM3NXB4KSwgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZyxcbiAgICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7IH0gfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1idXR0b25zLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuY29udGVudC1pdGVtIC5jb250ZW50LWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtbG9jazpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL3BhZGxvY2stc3ByaXRlLnBuZyk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrLmxvY2tlZDpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1sb2NrLmxvY2tlZDpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtbG9jay5sb2NrZWQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1wYWdlLWNvdW50LFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtcGFnZS1jb3VudCxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSAuY29udGVudC1wYWdlLWNvdW50IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtOmFmdGVyLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW06YWZ0ZXIsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW06YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYTIwNDFiIDI1JSwgI2ZhNDU1Zik7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW06YWN0aXZlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW06YWN0aXZlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLm5vLXJlc291cmNlcyAuY29udGVudC1pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhMmFmO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNhMjA0MWI7IH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW06aG92ZXIsXG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudCAubm8tcmVzb3VyY2VzIC5jb250ZW50LWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhMmFmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2EyMDQxYjsgfSB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAzNzVweCksIChtYXgtd2lkdGg6IDQ3NnB4KSB7XG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSxcbiAgICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0sXG4gICAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0OHB4ICsgNXB4KTsgfSB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50IC5uby1yZXNvdXJjZXMge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0sXG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNzJweDsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1vdXRlcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1vdXRlciB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyhjYWxjKDcycHgvMikgKiAtMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDcycHgvMik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2EyMDQxYiA1MCUsICNmYTQ1NWYgNTElKTtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZShjYWxjKDcycHgvMikgYXQgcmlnaHQpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoY2FsYyg3MnB4LzIpIGF0IHJpZ2h0KTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1pbm5lcixcbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNpcmNsZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyhjYWxjKGNhbGMoNzJweC8yKSAtIDRweCkgKiAtMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKGNhbGMoY2FsYyg3MnB4LzIpIC0gNHB4KSAqIDIpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoNzJweC8yKSAtIDRweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZShjYWxjKGNhbGMoNzJweC8yKSAtIDRweCkgYXQgcmlnaHQpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoY2FsYyhjYWxjKDcycHgvMikgLSA0cHgpIGF0IHJpZ2h0KTsgfVxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLFxuICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhMjA0MWIgNTAlLCAjZmE0NTVmIDUxJSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU4cHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWc6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9yZXNvdXJjZXMtaWNvbnMucG5nKTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExOHB4IDYwcHg7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTI6YmVmb3JlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04OXB4IDBweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS0zOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS0zOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDVweCAtMzFweDsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC51bml0LWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS01OmJlZm9yZSxcbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAucmVzb3VyY2VzLWNvbnRlbnQgLmNvbnRlbnQtaXRlbSAuY29udGVudC1pbWcudHlwZS01OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDVweCAwcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTg5cHggLTMxcHg7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LnRlYWNoZXItY29udGVudCAudW5pdC1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNzpiZWZvcmUsXG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnJlc291cmNlcy1jb250ZW50IC5jb250ZW50LWl0ZW0gLmNvbnRlbnQtaW1nLnR5cGUtNzpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0zMXB4OyB9XG4gICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnRhYnMtY29udGVudCAuY29udGVudC50ZWFjaGVyLWNvbnRlbnQgLnVuaXQtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTg6YmVmb3JlLFxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC50YWJzLWNvbnRlbnQgLmNvbnRlbnQudGVhY2hlci1jb250ZW50IC5yZXNvdXJjZXMtY29udGVudCAuY29udGVudC1pdGVtIC5jb250ZW50LWltZy50eXBlLTg6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7IH1cbiAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tY29udGVudCAudGFicy1jb250ZW50IC5jb250ZW50LmFjdGl2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMjA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgcGFkZGluZzogMCAyJTsgfSB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc2cHgpIHtcbiAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvOyB9XG4gICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGUgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7IH1cbiAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLnNlY3Rpb24tdGl0bGU6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1bnNldDsgfVxuICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgfVxuICAgICAgICAgICAgICAgICNsYXlvdXQtY29udGFpbmVyIGRpdltpZCo9XCJzZWN0aW9uLXNjcmVlblwiXSAuc2VjdGlvbiAuc2VjdGlvbi1kYXRhIC5kZXNjLXdyYXBwZXIgLnNlY3Rpb24tZGVzYyBbY2xhc3MqPXNlY3Rpb24tdGl0bGUtXSB7XG4gICAgICAgICAgICAgICAgICBmbGV4OiA1O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7IH1cbiAgICAgICAgICAgICAgICAjbGF5b3V0LWNvbnRhaW5lciBkaXZbaWQqPVwic2VjdGlvbi1zY3JlZW5cIl0gLnNlY3Rpb24gLnNlY3Rpb24tZGF0YSAuZGVzYy13cmFwcGVyIC5zZWN0aW9uLWRlc2MgLnNlY3Rpb24tbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICAgIGZsZXg6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDsgfVxuICAgICAgICAgICAgICAgICAgI2xheW91dC1jb250YWluZXIgZGl2W2lkKj1cInNlY3Rpb24tc2NyZWVuXCJdIC5zZWN0aW9uIC5zZWN0aW9uLWRhdGEgLmRlc2Mtd3JhcHBlciAuc2VjdGlvbi1kZXNjIC5zZWN0aW9uLW51bWJlciBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyB9IH1cbiAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDE2NiwgMTczLCAwLjIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxNDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gKDE0NXB4LzIpKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHotaW5kZXg6IDM7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uIGkge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uIGk6YmVmb3JlIHtcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICMyMjNjM2Y7IH1cbiAgICAjbGF5b3V0LWNvbnRhaW5lciAuc2VjdGlvbi1uYXZpZ2F0aW9uLmxlZnQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCBjYWxjKDE0NXB4LzIpIGNhbGMoMTQ1cHgvMikgMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0OyB9XG4gICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbi5yaWdodCB7XG4gICAgICBib3JkZXItcmFkaXVzOiBjYWxjKDE0NXB4LzIpIDAgMCBjYWxjKDE0NXB4LzIpO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzZweCkge1xuICAgICAgI2xheW91dC1jb250YWluZXIgLnNlY3Rpb24tbmF2aWdhdGlvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTsgfSB9XG4gICNsYXlvdXQtY29udGFpbmVyICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjM3LCAyMzcsIDAuMjUpO1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7IH1cbiAgI2xheW91dC1jb250YWluZXIgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMjA0MUI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuICAjbGF5b3V0LWNvbnRhaW5lciAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4gICNsYXlvdXQtY29udGFpbmVyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxOyB9XG4gICNsYXlvdXQtY29udGFpbmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2MzZjc3O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgI2xheW91dC1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87IH0gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==*/
  
