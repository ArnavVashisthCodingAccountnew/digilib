import * as React from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class Cho1 extends React.Component {
  render() {
    const books = [
      {
        title: 'Quantaum Computing',
        author: 'Brian Clegg',
        review: '4.5 stars',
        imageUri: 'https://m.media-amazon.com/images/I/81U9Hz7J7wL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg',
      },
      {
        title: 'Unstoppable Us',
        author: 'Yuval Noah Harari',
        review: '4.3 stars',
        imageUri: 'https://m.media-amazon.com/images/I/91U9tVzQfbL._AC_UF894,1000_QL80_.jpg',
      },
      // Add more books here...
    ];

    return (
      <ScrollView>
        <TouchableOpacity style={{ backgroundColor: '#5e17eb' }}>
          <Text style={{ color: 'white', fontSize: 19, marginTop: 80, marginBottom: 10, fontWeight: 'bold' }}>
            Find the books you want.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F6F6F6',
              padding: 10,
              borderRadius: 14,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 30, // Apply border-radius to the entire search bar
            }}>
            <FontAwesome name="search" size={20} color="gray" style={{ marginLeft: 10, marginRight: 10 }} />

            <TextInput
              style={{
                flex: 1,
                height: 35,
                backgroundColor: '#F6F6F6', // Set input background to transparent
                marginRight: 20,
              }}
              placeholder="Search"
            />
          </View>
        </TouchableOpacity>

        <Text style={Stylus.book}>Top Authors</Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://cdn.britannica.com/91/133791-050-0BA517B1/Roald-Dahl-photograph-Carl-Van-Vechten-1954.jpg?w=400&h=300&c=crop' }}
              />
              <Text style={Stylus.authorName}>Roald</Text>
              <Text style={Stylus.authorName}>Dahl</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Elisabettadami-2019.jpg/330px-Elisabettadami-2019.jpg' }}
              />
              <Text style={Stylus.authorName}>Elisabetta</Text>
              <Text style={Stylus.authorName}>Dami</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ashleigh_and_David_Walliams_%28the_voice_of_Pudsey_in_the_movie%29_%28cropped%29.JPG/330px-Ashleigh_and_David_Walliams_%28the_voice_of_Pudsey_in_the_movie%29_%28cropped%29.JPG' }}
              />
              <Text style={Stylus.authorName}>David</Text>
              <Text style={Stylus.authorName}>Williams</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={Stylus.authorCardContainer}>
              <Image
                style={Stylus.authorImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jules_Verne_by_%C3%89tienne_Carjat.jpg/330px-Jules_Verne_by_%C3%89tienne_Carjat.jpg' }}
              />
              <Text style={Stylus.authorName}>Jules</Text>
              <Text style={Stylus.authorName}>Verne</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Text style={Stylus.book}>Fiction</Text>
        <ScrollView horizontal={true}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          )}
        </ScrollView>

        <Text style={Stylus.book}>Biography</Text>
        <ScrollView horizontal={true}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          )}
        </ScrollView>

        <Text style={Stylus.book}>Coding</Text>
        <ScrollView horizontal={true}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              review={book.review}
              imageUri={book.imageUri}
              navigate={() => this.props.navigation.navigate('BookDetail', { book })}
            />
          )}
        </ScrollView>
      </ScrollView>
    );
  }
}

const BookCard = ({ title, author, review, imageUri, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate}>
      <View style={Stylus.cardContainer}>
        <Image style={Stylus.cardImage} source={{ uri: imageUri }} />
        <Text style={Stylus.cardTitle}>{title}</Text>
        <Text style={Stylus.cardAuthor}>{author}</Text>
        <Text style={Stylus.cardReview}>{review}</Text>
      </View>
    </TouchableOpacity>
  )};
    const Stylus = StyleSheet.create({
      libo: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 25,
      },
      book: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
      },
      cardContainer: {
        margin: 10,
        width: 150,
      },
      cardImage: {
        width: 130,
        height: 200,
        borderRadius: 30,
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      cardAuthor: {
        color: 'grey',
        fontSize: 12,
      },
      cardReview: {
        color: 'grey',
        fontSize: 12,
      },
      authorCardContainer: {
        marginLeft: 10,
        width: 100,
      },
      authorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      authorName: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 13,
      },
    });
    