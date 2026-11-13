public class bai18_nested_loop {
    public static void main(String[] args) {
        for (int i = 1; i<= 7; i++) {
            for (int j = 1; j <= 7; j++) {
                System.out.print(i+ ""+j + "\t");
            }
            System.out.println("");
        }
        System.out.println("");
        System.out.println("Ve chu N");
        //Ve chu N
        for (int i = 1; i<= 7; i++) {
            for (int j = 1; j <= 7; j++) {
                if(j == 1 || j == 7 || i == j)
                System.out.print(i+ ""+j + "\t");
                else
                    System.out.print("" + "\t");
            }
            System.out.println("");
        }

        System.out.println("");
        System.out.println("Ve hinh vuong rong ben trong");
        //cau b: Ve hinh vuong rong ben trong
        for (int i = 1; i<= 7; i++) {
            for (int j = 1; j <= 7; j++) {
                if(j == 1 || j == 7 || i == 1 || i == 7)
//                    System.out.print(i+ ""+j + "\t");
                    System.out.print("*" + "\t");
                else
                    System.out.print("" + "\t");
            }
            System.out.println("");
        }

        System.out.println("");
        System.out.println("hinh tam giac");
        //cau c: Ve hinh tam giac
        for (int i = 1; i<= 7; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*"+ "\t");
            }
            System.out.println("");
        }

        System.out.println("");
        System.out.println("Ve hinh tam giac vuong rong ben trong");
        //cau d: Ve hinh tam giac vuong rong ben trong
        for (int i = 1; i<= 7; i++) {
            for (int j = 1; j <= i; j++) {
                if(i ==j || i == 1 || i == 7 || j == 1)
                    System.out.print("*" + "\t");
                else
                    System.out.print(""+ "\t");
            }
            System.out.println("");
        }

        System.out.println("");
        System.out.println("Ve hinh tam giac vuong phia tren");
        //cau e: Ve hinh tam giac vuong phia tren
        for (int i = 1; i<= 7; i++) {
            for (int j = 7; j >= i; j--) {
                    System.out.print("*"+ "\t");
            }
            System.out.println("");
        }

        System.out.println("");
        System.out.println("Ve hinh tam giac vuong phia tren rong o giua");
        //cau f: Ve hinh tam giac vuong phia tren rong o giua
        for (int i = 1; i<= 7; i++) {
            for (int j = 7; j >= i; j--) {
                if(i ==1 || j == 1 || j == 7 || i == 7 || i==j)
                    System.out.print("*" + "\t");
                else
                    System.out.print(""+ "\t");
            }
            System.out.println("");
        }

    }
}
