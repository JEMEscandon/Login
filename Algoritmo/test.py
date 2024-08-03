import requests

class prediction():

    def querybook(self,literary_genre,maxResults):
        url = 'https://www.googleapis.com/books/v1/volumes'
        params = {'q': literary_genre, 'maxResults': maxResults}
        response = requests.get(url, params=params)
        for index in response.json()['items']:
            print("--------------------------------")
            for x in index:
                print(x,": ",index[x])
            #print(index)
            print("--------------------------------")
    
    def predictionbook(self):
        pass
    
