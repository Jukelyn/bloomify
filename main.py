# Import necessary libraries and modules
from sklearn.preprocessing import LabelEncoder
from transformers import BertTokenizer, BertForSequenceClassification
import json

model_name = "bert-base-uncased"
tokenizer = BertTokenizer.from_pretrained(model_name)


# The inputs to be categorized
entries = []


def read_entry():
    # read entry and add it to entries list
    pass


def main():
    f = open('userInputs.json')
    entries = json.load(f)
    
    categories = ["Health and Wellness", "Family", "Achievements", "Environment",
              "Material Possessions", "Community", "Miscellaneous"]

    model = BertForSequenceClassification.from_pretrained(
        model_name, num_labels=len(categories))

    predictions = model.classify(entries)

    label_encoder = LabelEncoder()
    label_encoder.fit(categories)

    # Map predicted labels to category names
    predicted_categories = label_encoder.inverse_transform(predictions)

    # Print the results
    for entry, category in zip(entries, predicted_categories):
        print(f"Text: {entry}")
        print(f"Predicted Category: {category}\n")


if __name__ == "__main__":
    main()
