package com.academy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Service
public class EncryptionService {

    private static final Logger log = LoggerFactory.getLogger(EncryptionService.class);

    private static String privateKey = "7b421a0361920c2ee8b55cdc39781b27";

    private static SecretKey getKey() {
        return new SecretKeySpec(privateKey.getBytes(), "AES");
    }

    public String encrypt(String data) {
        try {
            SecretKey key = getKey();
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] encrypted = cipher.doFinal(data.getBytes());
            return Base64.getUrlEncoder().withoutPadding().encodeToString(encrypted);
        } catch (Exception e) {
            System.err.println("error while encrypt ::" + e);
            return null;
        }
    }

    public String decrypt(String encryptedText) {
        try {
            SecretKey key = getKey();
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] decryptedBytes = cipher.doFinal(Base64.getUrlDecoder().decode(encryptedText));
            return new String(decryptedBytes);
        } catch (Exception e) {
            System.err.println("error while decrypt ::" + e);
            return null;
        }
    }


}
