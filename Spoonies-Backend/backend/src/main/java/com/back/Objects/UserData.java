package com.back.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user_data")
public class UserData {

    @Id
    private String Id;

    @Indexed(unique = true)
    private String Uid;

    private String AccountType;
    private int DailyTotal;


// Getters abd Setters
    public String getId() {
        return Id;
    }
    public void setId(String id) {
        Id = id;
    }
    public String getUid() {
        return Uid;
    }
    public void setUid(String uid) {
        Uid = uid;
    }
    public String getAccountType() {
        return AccountType;
    }
    public void setAccountType(String accountType) {
        AccountType = accountType;
    }
    public int getDailyTotal() {
        return DailyTotal;
    }
    public void setDailyTotal(int dailyTotal) {
        DailyTotal = dailyTotal;
    }
    public int getCurrent() {
        return Current;
    }
    public void setCurrent(int current) {
        Current = current;
    }
    private int Current;
    
}
