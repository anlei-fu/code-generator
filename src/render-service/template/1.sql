CREATE TABLE `theme_config` (
    
    `id` int(11) NOT NULL DEFAULT '1',  
    `project_id` int(11) NOT NULL DEFAULT null,  
    `base_color1` varchar(45) NOT NULL DEFAULT null,  
    `base_color2` varchar(45) NOT NULL DEFAULT null,  
    `login` varchar(45) NOT NULL DEFAULT null,  
    
    PRIMARY KEY (`id`,`name`) ,
    UNIQUE KEY `foreign`(`project_id`) ,
    KEY `index`(`base_color1`,`base_color2`) 
    
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci comment='111';