    /**
     * @description
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY,  generator = "SELECT @seq.NEXTVAL FROM DUAL")
    private @type @name;
   
