@nameCreateDTO dto = @nameCreateDTO.builder()
@fields
.build();

Assert.assertTrue(service.add@name(dto));


@nameUpdateDTO dto = @nameUpdateDTO
.builder()
@fields
.build();

service.update@name(dto);


@namePageDTO dto = @namePageDTO
.builder()
@fields                
.build();

service.get@namePage(dto);