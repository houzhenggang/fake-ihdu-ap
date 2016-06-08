Create Database wifinono 
CHARACTER SET 'utf8' 
COLLATE 'utf8_unicode_ci';
use wifinono;
CREATE TABLE macInfo (
  idmacInfo INT NOT NULL PRIMARY KEY  auto_increment, 
  macValue_idmacValue INT NOT NULL, 
  macPropertyInfo_idmacPropertyInfo INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE Visitor (
  idVisitor INT NOT NULL PRIMARY KEY  auto_increment, 
  Day VARCHAR(20) NOT NULL, 
  h1 INT NOT NULL DEFAULT 0, 
  h2 INT NOT NULL DEFAULT 0, 
  h3 INT NOT NULL DEFAULT 0, 
  h4 INT NOT NULL DEFAULT 0, 
  h5 INT NOT NULL DEFAULT 0, 
  h6 INT NOT NULL DEFAULT 0, 
  h7 INT NOT NULL DEFAULT 0, 
  h8 INT NOT NULL DEFAULT 0, 
  h9 INT NOT NULL DEFAULT 0, 
  h10 INT NOT NULL DEFAULT 0, 
  h11 INT NOT NULL DEFAULT 0, 
  h12 INT NOT NULL DEFAULT 0, 
  h13 INT NOT NULL DEFAULT 0, 
  h14 INT NOT NULL DEFAULT 0, 
  h15 INT NOT NULL DEFAULT 0, 
  h16 INT NOT NULL DEFAULT 0, 
  h17 INT NOT NULL DEFAULT 0, 
  h18 INT NOT NULL DEFAULT 0, 
  h19 INT NOT NULL DEFAULT 0, 
  h20 INT NOT NULL DEFAULT 0, 
  h21 INT NOT NULL DEFAULT 0, 
  h22 INT NOT NULL DEFAULT 0, 
  h23 INT NOT NULL DEFAULT 0, 
  h24 INT NOT NULL DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE InStore (
  idInStore INT NOT NULL PRIMARY KEY  auto_increment, 
  Day VARCHAR(20) NOT NULL, 
  h1 INT NOT NULL DEFAULT 0, 
  h2 INT NOT NULL DEFAULT 0, 
  h3 INT NOT NULL DEFAULT 0, 
  h4 INT NOT NULL DEFAULT 0, 
  h5 INT NOT NULL DEFAULT 0, 
  h6 INT NOT NULL DEFAULT 0, 
  h7 INT NOT NULL DEFAULT 0, 
  h8 INT NOT NULL DEFAULT 0, 
  h9 INT NOT NULL DEFAULT 0, 
  h10 INT NOT NULL DEFAULT 0, 
  h11 INT NOT NULL DEFAULT 0, 
  h12 INT NOT NULL DEFAULT 0, 
  h13 INT NOT NULL DEFAULT 0, 
  h14 INT NOT NULL DEFAULT 0, 
  h15 INT NOT NULL DEFAULT 0, 
  h16 INT NOT NULL DEFAULT 0, 
  h17 INT NOT NULL DEFAULT 0, 
  h18 INT NOT NULL DEFAULT 0, 
  h19 INT NOT NULL DEFAULT 0, 
  h20 INT NOT NULL DEFAULT 0, 
  h21 INT NOT NULL DEFAULT 0, 
  h22 INT NOT NULL DEFAULT 0, 
  h23 INT NOT NULL DEFAULT 0, 
  h24 INT NOT NULL DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE macType (
  idmacType INT NOT NULL PRIMARY KEY  auto_increment, 
  TypeName VARCHAR(64) character set utf8 DEFAULT '普通'
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE macPropertyType (
  idmacPropertyType INT NOT NULL PRIMARY KEY  auto_increment, 
  macPropertyName VARCHAR(64) character set utf8, 
  macPropertyDesc VARCHAR(64) character set utf8
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE DevInfo (
  idDevInfo INT NOT NULL PRIMARY KEY  auto_increment, 
  idType INT NOT NULL, 
  idModel INT DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE DevModel (
  idDevModel INT NOT NULL PRIMARY KEY  auto_increment, 
  Name VARCHAR(32) character set utf8 NOT NULL, 
  Descri VARCHAR(32) character set utf8
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE DevType (
  idDevType INT NOT NULL PRIMARY KEY  auto_increment, 
  Name VARCHAR(32) character set utf8 NOT NULL, 
  Descri VARCHAR(32) character set utf8
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE AppType (
  idAppType INT NOT NULL PRIMARY KEY  auto_increment, 
  Name VARCHAR(32) character set utf8 NOT NULL, 
  Descri VARCHAR(32) character set utf8
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE AppName (
  idAppName INT NOT NULL PRIMARY KEY  auto_increment, 
  Name VARCHAR(32) character set utf8 NOT NULL, 
  Descri VARCHAR(32) character set utf8
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE AppInfo (
  idAppInfo INT NOT NULL PRIMARY KEY  auto_increment, 
  idAppType INT NOT NULL, 
  idAppName INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE macValue (
  idmacValue INT NOT NULL PRIMARY KEY  auto_increment, 
  macAddress VARCHAR(20), 
  macType_idmacType INT NOT NULL, 
  otherName VARCHAR(64) character set utf8, 
  descri VARCHAR(64) character set utf8, 
  idDevinfo INT DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE DevAppInfo (
  idDevAppInfo INT NOT NULL PRIMARY KEY  auto_increment, 
  idmacValue INT NOT NULL, 
  idAppInfo INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE macTime (
  idmacTime INT NOT NULL PRIMARY KEY  auto_increment, 
  InTime VARCHAR(20), 
  OutTime VARCHAR(20), 
  macValue_idmacValue INT NOT NULL, 
  stayTime INT DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


CREATE TABLE macPropertyInfo (
  idmacPropertyInfo INT NOT NULL PRIMARY KEY  auto_increment, 
  Value VARCHAR(128) character set utf8, 
  macPropertyType_idmacPropertyType INT NOT NULL, 
  UpdateTime VARCHAR(20), 
  IsVallid INT DEFAULT 0
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE 'utf8_unicode_ci';


