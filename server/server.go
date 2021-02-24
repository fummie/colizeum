package main

import (
	"log"
	"net/http"
	"io/ioutil"
	"github.com/rs/cors"
)

func getSummonerByName(w http.ResponseWriter, r *http.Request) {
	//summoner, err := http.Get("/lol/summoner/v4/summoners/by-name/{summonerName}")
	summoner, err := ioutil.ReadFile("./data/summoner.json")
	if err != nil {
		log.Fatalln(err)
	}
	w.Header().Set("Content-Type", "text/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	w.Write(summoner)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/getSummonerByName", getSummonerByName)
	handler := cors.Default().Handler(mux)
	err := http.ListenAndServe("localhost:8000", handler)
	if err != nil {
		log.Fatal(err)
	}
}