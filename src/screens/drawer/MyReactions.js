import { View, Text,Image,StyleSheet,Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get("window");

export default function MyReactions(props) {
  
  let { name, icon, photo,iconName } = props
    let color='border-'+iconName

  return (<>
      <View style={styles.containerGeneral}>
          <View style={color}>
              <View style={styles.containerCard}>
                  <Image source={{uri:icon}}/>
                  <View>
                      <Image source={{uri:photo}}/>
                      <Text>{name}</Text>
                  </View>
              </View>
          </View>  
      </View>
      
    {/* <div className='my-reaction-card-container'>
    <div className={color} >
       
            <img className="icon-margin" src={icon} alt={name} width='30px' />
                <div className='user-reaction-container'>
                <img className='my-reaction-img' src={photo} alt={name} />
                <h4 className='reaction-title'>{name}</h4>
    
                <img className='delete-reactions' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="trash" name={id} width='40px' onClick={deleteReaction} />
        
            </div>
    </div>

</div> */}
  </>)
}

const styles=StyleSheet.create({

  containerGeneral:{
      height: height/1,
      flexWrap:'wrap',
      justifyContent: 'space-evenly',
      alignItems:'center'
  },
  containerCard:{
    backgroundColor:'blue',
    height:200,
  }
})