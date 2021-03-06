package main

import (
	"log"
	"net/http"
	"io/ioutil"
	"github.com/rs/cors"
	"encoding/json"
)

type body struct {
	Operation string
	Data      string
}

func fetchRiotAPI(writer http.ResponseWriter, request *http.Request) {
	decoder := json.NewDecoder(request.Body)
	var requestBody body
	err := decoder.Decode(&requestBody)
	if err != nil {
		log.Println(err)
	}

	/*response, err := http.Get(requestBody.Operation + requestBody.Data)
	if err != nil {
		log.Fatalln(err)
	}*/

	var response []byte
	switch requestBody.Operation {
	case "/lol/summoner/v4/summoners/by-name/":
		response, _ = ioutil.ReadFile("./data/summoner.json")
	case "/lol/clash/v1/players/by-summoner/":
		response, _ = ioutil.ReadFile("./data/teamMember.json")
	case "/lol/clash/v1/teams/":
		response, _ = ioutil.ReadFile("./data/team.json")
	case "/lol/summoner/v4/summoners/":
		response, _ = ioutil.ReadFile("./data/summoner.json")
	}

	writer.Header().Set("Content-Type", "text/json; charset=utf-8")
	writer.WriteHeader(http.StatusOK)
	writer.Write(response)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", fetchRiotAPI)
	handler := cors.Default().Handler(mux)
	err := http.ListenAndServe("localhost:8000", handler)
	if err != nil {
		log.Fatal(err)
	}
}