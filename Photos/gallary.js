*{
    padding:0px;
    margin:0px
}
img{
    width:300px;
    height:250px;
    border-radius: 5px;
    border:5px groove black;
    box-shadow: 5px 5px 5px gray;
    transition: transform 0.2s;
}
img:hover{
    cursor:pointer;
    transform: scale(1.2);
}
#Container{
    padding-top: 120px;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
    row-gap: 40px;
    column-gap: 40px;
    position: relative;
    z-index: 0;
}
#bigImageContainer{
    width:80%;
    height:40vw;
    background-image: url(./Gallary/Images/0.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: 5px 5px 5px black;
    border-radius: 5px;
}
#closeWindow{
    position:absolute;
    top:40px;
    right:40px;
    font-size: 40px;
    background-color: transparent;
    border:none;
    color:white;
    cursor:pointer;
    transition:transform 0.2s;
}
#closeWindow:hover{
    transform:rotate(180deg);
}