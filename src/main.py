# Import necessary libraries and modules
from sklearn.preprocessing import LabelEncoder
from transformers import BertTokenizer, BertForSequenceClassification
import json

model_name = "bert-base-uncased"
tokenizer = BertTokenizer.from_pretrained(model_name)

entries = None


def read_entry():
    """
    TODO: connect to firebase storrage, get all the files and then parse them and then
    make it so that those files are deleted, and instead you are left with just one bigger
    file with the data as either a csv or json. Easier said than done... 
    """


def main():
    read_entry()  # reads entries from the user inputs

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
