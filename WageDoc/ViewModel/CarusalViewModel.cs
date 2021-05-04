using System;
using System.Collections.Generic;
using System.Text;

namespace WageDoc.ViewModel
{
    public class CarusalViewModel
    {
        public CarusalViewModel()
        {
            Onboardings = GetOnboardings();
        }
        public List<Onboarding> Onboardings { get; set; }

        private List<Onboarding> GetOnboardings()
        {
            return new List<Onboarding>
            {
                new Onboarding{Heading="Hurensohn geh sterben", Caption="Bitch nigga i dont like you, go dieeee Lessgo dababy?"},
                new Onboarding{Heading="Hurensohn geh sterben", Caption="Bitch nigga i dont like you, go dieeee Lessgo dababy?"},
                new Onboarding{Heading="Hurensohn geh sterben", Caption="Bitch nigga i dont like you, go dieeee Lessgo dababy?"}
            };

        }
    }
    public class Onboarding
    {
        public string Heading { get; set; }
        public string Caption { get; set; }
    }
}
