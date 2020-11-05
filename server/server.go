package main

import (
	"fmt"
	"log"
	"net/http"
)

func getSummoner(w http.ResponseWriter, r *http.Request) {
	summoner, err := http.Get("/lol/summoner/v4/summoners/{encryptedSummonerId}")
	if err != nil {
		log.Fatalln(err)
	}


}

func main() {
	http.HandleFunc("/api/getSummoner", getSummoner)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}