import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const DetailCard = ({ name, img, price, cat, location, des }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <View>
      <Text style={styles.detailTitle}>Detalhe do Pedido</Text>
      <Animatable.View
        animation="fadeInUp"
        duration={1000} // Adicione a duração da animação
        style={styles.cardContainer}
      >
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{des}</Text>
          <Text style={styles.price}>R$ {price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          {showMessage && (
            <Text style={styles.successMessage}>Item adicionado com sucesso!</Text>
          )}
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'gold',
    borderBottomStartRadius: 20,
    color:'white',
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightslategray',
    borderRadius: 10,
    padding: 8,
  },
  image: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 25,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
  },
  description: {
    color: 'gray',
    marginTop: 5,
    fontSize: 21,
  },
  price: {
    color: '#00CCBB',
    fontSize: 20,
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#00CCBB',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
    height: 20,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default DetailCard;
