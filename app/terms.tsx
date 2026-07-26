import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import Colors from '@/constants/colors';

export default function TermsAndConditionsScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Terms and Conditions</Text>

                <Text style={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</Text>

                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.paragraph}>
                    Welcome to MeatUp. By accessing our website or using our mobile application, you agree to be bound by these Terms and Conditions. Please read them carefully.
                </Text>

                <Text style={styles.sectionTitle}>2. Use of Our Service</Text>
                <Text style={styles.paragraph}>
                    You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website or app.
                </Text>

                <Text style={styles.sectionTitle}>3. User Accounts</Text>
                <Text style={styles.paragraph}>
                    If you create an account, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.
                </Text>

                <Text style={styles.sectionTitle}>4. Pricing and Availability</Text>
                <Text style={styles.paragraph}>
                    All prices are subject to change without notice. We reserve the right to modify or discontinue any product at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the service.
                </Text>

                <Text style={styles.sectionTitle}>5. Payment and Billing</Text>
                <Text style={styles.paragraph}>
                    By providing a credit card or other payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us to charge your payment method for the total amount of your order.
                </Text>

                <Text style={styles.sectionTitle}>6. Delivery and Returns</Text>
                <Text style={styles.paragraph}>
                    Delivery times are estimates and not guaranteed. If you are not satisfied with your purchase, please contact us within 24 hours of delivery. Refunds or replacements are handled on a case-by-case basis.
                </Text>

                <Text style={styles.sectionTitle}>7. Limitation of Liability</Text>
                <Text style={styles.paragraph}>
                    MeatUp shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </Text>

                <Text style={styles.sectionTitle}>8. Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions about these Terms and Conditions, please contact us at meatup.in@gmail.com.
                </Text>

                {/* Add some bottom padding */}
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        padding: 24,
        ...(Platform.OS === 'web' && {
            maxWidth: 800,
            alignSelf: 'center',
            width: '100%',
        }),
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.charcoal,
        marginBottom: 8,
    },
    lastUpdated: {
        fontSize: 14,
        color: Colors.charcoal,
        opacity: 0.6,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.charcoal,
        marginTop: 24,
        marginBottom: 12,
    },
    paragraph: {
        fontSize: 16,
        color: Colors.charcoal,
        lineHeight: 24,
        opacity: 0.8,
    },
});
