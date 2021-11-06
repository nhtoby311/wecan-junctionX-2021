const user = 
{
    "id": 1,
    "createdAt": "2021-10-24T06:48:49.578Z",
    "updatedAt": "2021-10-24T06:48:49.578Z",
    "firstName": "Mariane",
    "lastName": "Rogahn",
    "role": "USER",
    "email": "junctionx@gmail.com",
    "avatar": null,
    "phone": null,
    "diseases": [
        {
            "questionnaires": [
                {
                    "id": 1,
                    "questions": [
                        {
                            "question": "Have you experienced unusual or fully new symptoms?",
                            "id": 31,
                            "type": "Medical",
                            "questionType": null,
                            "options": [
                                "Yes, I have",
                                "No, I have not"
                            ],
                            "answerFromDoctor": "No, i have not"
                        },
                        {
                            "question": "Have you experienced any of these symptoms lately?",
                            "id": 32,
                            "type": "Medical",
                            "questionType": null,
                            "options": [
                                "Diarrhea",
                                "Vomiting",
                                "Trouble with swallowing",
                                "Loss of appetite"
                            ],
                            "answerFromDoctor": ""
                        },
                        {
                            "question": "Rate on a scale from 1 to 5 how you feel yourself.",
                            "id": 33,
                            "type": "Psychological",
                            "questionType": null,
                            "options": [
                                "1",
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            "answerFromDoctor": "5"
                        },
                        {
                            "question": "Want to share something else?",
                            "id": 35,
                            "type": "Psychological",
                            "questionType": null,
                            "options": [
                                "Yes, I do",
                                "No, I do not"
                            ],
                            "answerFromDoctor": "No, I do not"
                        },
                        {
                            "question": "Have you faced lack of motivation or depression lately?",
                            "id": 34,
                            "type": "Psychological",
                            "questionType": null,
                            "options": [
                                "Lack of motivation",
                                "Depression",
                                "No,I have not"
                            ],
                            "answerFromDoctor": "No, I have not"
                        }
                    ]
                }
            ],
            "sideEffects": [
                {
                    "name": "Cough",
                    "id": 1
                },
                {
                    "name": "Bleeding",
                    "id": 2
                }
            ],
            "articles": [
                {
                    "title": "Treating bone cancer",
                    "id": 1,
                    "content": "Lorem ipsum treating bone cancer"
                },
                {
                    "title": "After bone cancer treatment",
                    "id": 2,
                    "content": "Lorem ipsum after bone cancer treatment"
                }
            ]
        }
    ],
    "appointments": [
        {
            "id": 1,
            "doctor": {
                "name": "Dr. Virgil Van Dijk",
                "id": 2
            },
            "place": "1077 Wesselenyi utca 43, Budapest",
            "time": "2021-10-10 10:20:00"
        },
        {
            "id": 2,
            "doctor": {
                "name": "Dr. Ronaldo",
                "id": 2
            },
            "place": "1117 Fehervari utca 15, Budapest",
            "time": "2021-10-11 11:20:00"
        },
        {
            "id": 3,
            "doctor": {
                "name": "Dr. Ronaldo",
                "id": 2
            },
            "place": "1117 Fehervari utca 15, Budapest",
            "time": "2021-11-11 11:20:00"
        }
    ],
    "doctors": [
        {
            "name": "Dr. Virgil Van Dijk",
            "id": 1,
            "specialty": [
                {
                    "name": "Bone Cancer",
                    "id": 1,
                    "yearOfExperience": 10
                },
                {
                    "name": "Heart cancer",
                    "id": 2,
                    "yearOfExperience": 12
                }
            ],
            "address": "1077 Wesselenyi utca 43, Budapest",
            "phone": "+36209392384"
        },
        {
            "name": "Dr. Ronaldo",
            "id": 1,
            "specialty": [
                {
                    "name": "Bone Cancer",
                    "id": 1,
                    "yearOfExperience": 8
                },
                {
                    "name": "Brain cancer",
                    "id": 3,
                    "yearOfExperience": 15
                }
            ],
            "address": "1117 Fehervari utca 15, Budapest",
            "phone": "+36702329328"
        }
    ]
}

export default user 