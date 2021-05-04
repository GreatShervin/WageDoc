using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using WageDoc.Model;

namespace WageDoc.ViewModel
{
    class CardDataViewModel
    {
        public IList<CardDataModel> CardDataCollection { get; set; }

        public object SelectedItem {get; set;}

        public CardDataViewModel()
        {
            CardDataCollection = new List<CardDataModel>();
            GenerateCardModel();
        }

        private void GenerateCardModel()
        {
            CardDataCollection = new ObservableCollection<CardDataModel>
            {
                new CardDataModel
                {
                    ProfileImage="company.png",
                    HeadTitle ="Unternehmen"
                },
                new CardDataModel
                {
                    ProfileImage="profil.png",
                    HeadTitle ="Profil"
                },
                new CardDataModel
                {
                    ProfileImage="info.png",
                    HeadTitle="Info"
                }
            };
        }
    }
}
