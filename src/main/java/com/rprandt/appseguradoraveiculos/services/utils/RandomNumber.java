package com.rprandt.appseguradoraveiculos.services.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class RandomNumber {
	
	public static String randomNumber() {
		Date date = new Date();
		Integer randNum = new Random().nextInt(99);
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd-SS");
		return dateFormat.format(date).toString() + "-" + randNum.toString();
	}

}
