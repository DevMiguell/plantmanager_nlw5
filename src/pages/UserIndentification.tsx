import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIndentification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            😁
          </Text>
          <Text style={styles.title}>
            Como podemos {'\n'}
            Chamar você?
          </Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
  },

  emoji: {
    fontSize: 44,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 20,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  }

})