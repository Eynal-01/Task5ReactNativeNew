import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, ScrollView, TouchableOpacity, View, Text, TouchableWithoutFeedback } from "react-native";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible); // Toggles the modal visibility
  };
  return (
    <SafeAreaView>
     
      <Header></Header>
      <View style={styles.container123}>
      {/* Button to open/close the modal */}
      <TouchableOpacity style={styles.openButton} onPress={handleModal}>
        <Text style={styles.openButtonText}>Toggle Module</Text>
      </TouchableOpacity>

      {/* Modal component for the module */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModal}>
        <TouchableWithoutFeedback onPress={handleModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.moduleContent}>
                <View style={styles.drawerHeader}>
                  <Text style={styles.headerText}>Drawer Header</Text>
                  <Text style={styles.subHeaderText}>
                    Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation.
                  </Text>
                </View>

                {/* Primary button inside the module */}
                <TouchableOpacity style={styles.primaryButton} onPress={() => alert('Primary Button Pressed')}>
                  <Text style={styles.primaryButtonText}>Click Me</Text>
                </TouchableOpacity>

                {/* Secondary button inside the module */}
                <TouchableOpacity style={styles.secondaryButton} onPress={() => alert('Secondary Button Pressed')}>
                  <Text style={styles.secondaryButtonText}>Secondary Action</Text>
                </TouchableOpacity>

                {/* Button to close the modal */}
                {/* <TouchableOpacity style={styles.closeButton} onPress={handleModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity> */}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
      {/* <Name /> */}
      <Toggle />
      <View style={{ marginTop: 470 }}>
        <ScrollView>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Profile;
