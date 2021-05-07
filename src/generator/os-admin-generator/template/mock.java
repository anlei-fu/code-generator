  /**
     * Method: add@name(@nameCreateDTO dto)
     */
    @Test
    public void testAdd@name() throws Exception {
        @nameCreateDTO dto = @nameCreateDTO.builder()
                        @fields
                        .build();

        Assert.assertTrue(service.add@name(dto));
    }

    /**
     * Method: delete@nameBy@pkName
     */
    @Test
    public void testDelete@nameBy@pkName() throws Exception {
        service.delete@nameBy@pkName(100);
    }

    /**
     * Method: update@name(@nameUpdateDTO dto)
     */
    @Test
    public void testUpdate@name() throws Exception {
        @nameUpdateDTO dto = @nameUpdateDTO
                             .builder()
                             @fields
                             .build();

        service.update@name(dto); 
    }

    /**
     * Method: get@namePage(@namePageDTO dto)
     */
    @Test
    public void testGet@namePage() throws Exception {
        @namePageDTO dto = @namePageDTO
        .builder()
        @fields                
        .build();
        
        service.get@namePage(dto);
    }







