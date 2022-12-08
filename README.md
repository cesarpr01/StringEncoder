# String Encoder

Given string you will receive encoded string one by one char in a range of 1 to 5 seconds.
app is dockerized please review run-locally section.



## Installation

Install spaEncoder\encoder-app with npm

```bash
  npm install 
  cd encoder-app
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/cesarpr01/StringEncoder.git
```

Go to the project directory

```bash
  cd encoder-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


#### To Run Api container
```bash
docker run -it --rm -p 5119:80 encoder-image
```

#### To Run Encoder app contaiiner
```bash
docker run -it --rm -p 4200:8080 enconder-app
```



## API Reference

#### Encode Strings


```http
  GET /localhost:5119/Encoder/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. text to be encoded |

#### Get item

```http
  GET /localhost:5119/Cancel
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| N/A       |    N/A   | **Not Required**. just to Cancel task |

#### 

