import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Settings, Bell, Shield, Clock, Database, RefreshCw } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeInDown.delay(100)} style={styles.header}>
        <Settings size={48} color="#4CAF50" />
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Configure your security preferences</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
        <Text style={styles.sectionTitle}>Protection</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingHeader}>
            <Shield size={24} color="#4CAF50" />
            <Text style={styles.settingTitle}>Real-time Protection</Text>
          </View>
          <Switch value={true} onValueChange={() => {}} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingHeader}>
            <Bell size={24} color="#4CAF50" />
            <Text style={styles.settingTitle}>Threat Notifications</Text>
          </View>
          <Switch value={true} onValueChange={() => {}} />
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300)} style={styles.section}>
        <Text style={styles.sectionTitle}>Scanning</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingHeader}>
            <Clock size={24} color="#4CAF50" />
            <Text style={styles.settingTitle}>Automatic Scanning</Text>
          </View>
          <Switch value={true} onValueChange={() => {}} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingHeader}>
            <Database size={24} color="#4CAF50" />
            <Text style={styles.settingTitle}>Deep Scan</Text>
          </View>
          <Switch value={false} onValueChange={() => {}} />
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
        <Text style={styles.sectionTitle}>Updates</Text>
        
        <TouchableOpacity style={styles.updateButton}>
          <RefreshCw size={24} color="#fff" />
          <Text style={styles.updateButtonText}>Check for Updates</Text>
        </TouchableOpacity>

        <Text style={styles.updateInfo}>
          Last updated: Today at 09:30 AM{'\n'}
          Database version: 2024.1.15
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  section: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#2c2d31',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  updateInfo: {
    color: '#888',
    fontSize: 14,
    lineHeight: 20,
  },
});