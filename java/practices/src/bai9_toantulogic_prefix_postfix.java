public class bai9_toantulogic_prefix_postfix {
    public static void main(String[] args) {
    int i = 15;
    System.out.println(i > 0 && i < 10);
    System.out.println(!(i > 0) && i > 10);
    int a = 1;
    int b=2;
    int c= a++ - ++b + 1;
    //1. ++b truoc,b = 3
    //2. a = 1 => 1-3+1;
    //3. c=-1;
    //4. a++ => a = 2;


    }
}

//Toan tu logic
/*
* && AND
* || OR
* ! NEGATIVE
* */

//Toan tu tien to (prefix), hau to (postfix)
/*
* ++
* --
* */


//Uu tien tinh toan postfix, prefix
/*
* 1. Prefix
* 2. Cac phep toan con lai
* 3. Gan gia tri cho bien o ben trai dau bang
* 4. Postfix
* */

