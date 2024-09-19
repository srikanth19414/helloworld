package helloworld;

import java.util.Scanner;

public class Welcome{
    public static void main(String[] args){

        Scanner myobj= new Scanner(System.in);

        String name=myobj.nextLine();
        myobj.close();
        System.out.println("Welcome "+ name);

        
    }
    
}
