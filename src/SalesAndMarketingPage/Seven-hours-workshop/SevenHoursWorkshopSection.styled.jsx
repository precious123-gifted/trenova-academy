import styled from 'styled-components';

export const SevenHoursWorkshopSectionStyle = styled.div`

@media only screen and (min-width: 700px) {
width:100vw ;
height:120vh ;


display:flex ;
justify-content:center ;
align-items:center ;

.content{
    width:90% ;
    
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    

    .header{
        color:#191005 ;
        font-size: 3vw;
        margin-bottom:7vw ;
    }
    .boxes-container{
        width:100% ;
        display:flex ;
    flex-direction:column ;
    align-items:center ;

    #box{
        color:#191005;
        width:40vw ;
        height:45vh ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        font-family: Arial,Helvetica,sans-serif;
font-size: 1.7vw;
line-height: 2vw;
word-spacing: 0.8vw;
padding:1.2vw ;
.heading{
    width:90% ;
    height:40% ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    margin-bottom:3vw ;
    img{
        width: 80%;
  object-fit: contain;
aspect-ratio: 4/3;

    }
}
    }
    .section1{
        width:100% ;
        display:flex ;
        justify-content:space-between ;
        margin-bottom:8vw ;


        
    }

    .section2{
        width:100% ;
        display:flex ;
        justify-content:space-between ;  
    }
    }
}


}


@media only screen and (max-width: 700px) and (orientation: portrait) {

    width:100vw ;
height:420vw ;


display:flex ;
justify-content:center ;


.content{
    width:90% ;
   
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    .header{
        color:#191005 ;
        font-size: 8vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom:28vw ;
    }
    .boxes-container{
        width:100% ;
        display:flex ;
    flex-direction:column ;
    align-items:center ;

    #box{
        color:#191005;
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        font-family: Arial,Helvetica,sans-serif;
font-size: 5.5vw;
line-height: 6vw;
word-spacing: 1.2vw;
padding:1.2vw ;
margin-bottom:33vw ;
.heading{
    width:90% ;
    height:20% ;
    img{
        width: 100%;
  object-fit: contain;
aspect-ratio: 4/3;

    }
}
    }
    .section1{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        margin-bottom:8vw ;


        
    }

    .section2{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        
    }
    }
}



}

  
`;
