import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { Header } from '@/components/Header/Header';
import BigImageCard from '@/components/Card/BigImageCard';
import { BottomPanel } from '@/components/BottomPanel/BottomPanel';

const Profile = () => {
  return (
      <SafeAreaView>
      <Header></Header>
      <Name/>
      <Toggle/>
        <View style={{marginTop:470}}>
      <ScrollView>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
        <BigImageCard/>
      </ScrollView>
        </View>
      <BottomPanel/>
      </SafeAreaView>
  )
}

export default Profile
