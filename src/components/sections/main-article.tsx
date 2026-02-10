"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight, Home, Twitter, Facebook, Share2 } from 'lucide-react';

const MainArticle = () => {
  return (
    <motion.article 
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Article Header */}
      <div className="p-6 md:p-10 pb-0">
        {/* Date Header */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Calendar className="w-4 h-4" style={{ color: '#0c06f7' }} />
          <span>Τετάρτη 6 Μαΐου 2020</span>
        </div>

        {/* Post Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Constantia, serif' }}>
          <Link href="#" className="transition-colors" style={{ color: '#0c06f7' }}>
            Μήπως δεν εκτίθεστε όσο πρέπει;
          </Link>
        </h1>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none px-6 md:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 decoration-2 underline-offset-4 mb-6" style={{ fontFamily: 'Constantia, serif', textDecorationColor: '#0c06f7', textDecoration: 'underline' }}>
            Εκτεθείτε…. στον Ήλιο,
          </h2>
          <div className="flex flex-col items-center text-center italic mb-6 space-y-1">
            <p className="underline decoration-gray-400">Πάρτε συμπληρώματα Βιταμίνης D &</p>
            <p className="underline decoration-gray-400">Μειώστε τον κίνδυνο του καρκίνου!!</p>
          </div>
          <div className="flex flex-col items-center text-center italic mb-6 space-y-1">
            <p className="underline decoration-gray-400">Ο Ήλιος, τα Συμπληρώματα και ο ρόλος της Βιταμίνης D</p>
            <p className="underline decoration-gray-400">στη μείωση του κινδύνου και της εξέλιξης του καρκίνου!!!</p>
          </div>
        </div>

        <div className="mb-10 p-6 rounded-xl border-l-4" style={{ backgroundColor: 'rgba(12, 6, 247, 0.05)', borderLeftColor: '#0c06f7' }}>
          <p className="text-sm text-gray-600 leading-relaxed">
            Επιλογή, Επεξεργασία και Μετάφραση ερευνών: <span className="font-semibold text-gray-800">Κατερίνα Μηστριώτη</span> - WELL BEING CONSULTANT
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Πηγές/Έρευνες /Ερευνητές: Βλ. τέλος άρθρου
          </p>
        </div>

        {/* Sun Banner Image */}
        <div className="flex justify-center mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/15-2.png"
              alt="Vitamin D and Sun"
              width={640}
              height={360}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <blockquote className="my-8 pl-6 border-l-4 py-4 pr-4 rounded-r-xl" style={{ borderLeftColor: '#0c06f7', backgroundColor: 'rgba(12, 6, 247, 0.05)' }}>
          <p className="italic text-gray-700 leading-relaxed">
            Σύμφωνα με σοβαρές επιστημονικές έρευνες, «οι γυναίκες με χαμηλά επίπεδα Βιταμίνης D στο αίμα, έχουν σχεδόν διπλάσιες (97%) πιθανότητες να αναπτύξουν καρκίνο του μαστού σε σύγκριση με εκείνες με τα υψηλότερα επίπεδα».
          </p>
        </blockquote>

        {/* Awareness Image */}
        <div className="flex justify-center mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/19__Vit-D-awareness-offer-3.jpg" 
              alt="Vitamin D awareness"
              width={320}
              height={224}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <p className="italic mb-6 text-gray-700">
          Αποφεύγουμε τα χαμηλά επίπεδα απολαμβάνοντας καθημερινά, με σωστό τρόπο*, τον Ήλιο – χωρίς αντηλιακό και χωρίς γυαλιά ηλίου - και παίρνοντας συμπληρώματα διατροφής Βιταμίνης D.
        </p>

        <p className="italic mb-4 text-gray-700">Αυτός είναι ένας εύκολος, οικονομικός και ασφαλής τρόπος για τη μείωση:</p>

        {/* Breast Cancer Prevention Image */}
        <div className="flex justify-center mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/vit_d_breast_cancer-4.png"
              alt="Vitamin D for Breast Cancer Prevention"
              width={400}
              height={223}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <ul className="italic mb-8 list-none space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'rgba(12, 6, 247, 0.1)', color: '#0c06f7' }}>α</span>
            <span className="text-gray-700">της συχνότητας εμφάνισης,</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'rgba(12, 6, 247, 0.1)', color: '#0c06f7' }}>β</span>
            <span className="text-gray-700">την βελτίωση της πρόγνωσης και</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'rgba(12, 6, 247, 0.1)', color: '#0c06f7' }}>γ</span>
            <span className="text-gray-700">της έκβασης του καρκίνου!</span>
          </li>
        </ul>

        <p className="italic text-sm text-gray-500 mb-8">(επιπλέον έρευνες βρίσκονται σε εξέλιξη)</p>

        <p className="italic mb-4 text-gray-700">
          Η Βιταμίνη D στην πραγματικότητα δεν είναι Βιταμίνη!
        </p>
        <p className="italic mb-8 text-gray-700">
          Είναι ο πρόδρομος της ισχυρής στεροειδούς ορμόνης καλσιτριόλης, η οποία έχει εκτεταμένες δράσεις σε ολόκληρο τον οργανισμό, ρυθμίζοντας πολλές κυτταρικές διεργασίες που θα μπορούσαν να παίζουν ρόλο στην πρόληψη μιας σειράς καρκίνων (μαστού, παχέως εντέρου, ουροδόχου κύστεως, προστάτη αλλά και άλλων σοβαρών παθήσεων).
        </p>

        <p className="italic mb-6 font-medium" style={{ color: '#0c06f7' }}>
          Από την τροφή μας μπορούμε να πάρουμε ελάχιστη ποσότητα Βιταμίνης D (D3) από την συνολική που χρειαζόμαστε.
        </p>

        <div className="flex justify-center mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/18__6222-5.jpg"
              alt="Vitamin D sources"
              width={278}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <p className="italic mb-8 text-gray-700 text-lg font-medium text-center">
          Έτσι τα Συμπληρώματα και η σωστή* έκθεσή μας στον Ήλιο, είναι η απάντηση!!!!
        </p>

        {/* Note Box */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mb-10">
          <p className="italic font-semibold text-amber-800 mb-2">Σημείωση:</p>
          <p className="italic text-amber-900 leading-relaxed">
            Η Bιταμίνη D3 εμπλέκεται σε έναν λεπτό χορό με την Bιταμίνη K2, και θα πρέπει να έχετε και τα δύο συστατικά σε συνεργικές μεταξύ τους και επαρκείς ποσότητες για να εξασφαλίσετε βέλτιστη υγεία. Τα περισσότερα συμπληρώματα αποδίδουν αυτόν τον συνδυασμό.
          </p>
        </div>

        {/* Sun Exposure Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold italic border-b-2 pb-2 mb-6" style={{ fontFamily: 'Constantia, serif', borderBottomColor: '#0c06f7', color: '#0c06f7' }}>
            *Σωστός τρόπος έκθεσης στον ήλιο:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-xl">
              <p className="font-semibold text-amber-800 mb-2">Καλοκαίρι:</p>
              <p className="text-amber-900">Πρωί: μέχρι τις 12.00</p>
              <p className="text-amber-900">Απόγευμα: από τις 18.00 και μετά</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl">
              <p className="font-semibold text-blue-800 mb-2">Υπόλοιπος χρόνος:</p>
              <p className="text-blue-900">Ελεύθερα οποιαδήποτε ώρα</p>
              <p className="text-blue-900">Τουλάχιστον 45 λεπτά/ημέρα</p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/1___vitamin_D-6.jpg"
                alt="Woman drinking water in sun"
                width={400}
                height={270}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <p className="italic text-center font-semibold mb-8 text-lg" style={{ color: '#0c06f7' }}>
            Πάντοτε ενυδατωμένοι το καλοκαίρι κατά την διάρκεια της έκθεσής μας στον ήλιο (πίνουμε συχνά νερό)
          </p>

          <p className="italic mb-8 text-gray-700">
            Εάν έχουμε ευαίσθητο δέρμα, είναι καλό να φοράμε ένα λεπτό λευκό μπλουζάκι που θα απομακρύνει την πιθανότητα εγκαύματος.
          </p>

          <div className="flex justify-center mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/18__vitamin_D-7.jpg"
                alt="Safe sun exposure"
                width={400}
                height={266}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <p className="italic font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-xl">👒</span>
            Φοράμε πάντοτε καπέλο ανοιχτόχρωμο με γείσο.
          </p>
        </div>
        
        {/* References */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">
            Έρευνες/Πηγές
          </h4>
          <div className="text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>1. Bray F, Ferlay J, Soerjomataram I, Siegel RL, Torre LA, Jemal A. Global cancer statistics 2018: GLOBOCAN estimates of incidence and mortality worldwide...</p>
            <p>2. Clegg LX, Li FP, Hankey BF, Chu K, Edwards BK. Cancer survival among US whites and minorities: a SEER analytics report...</p>
            <p>3. Siegel RL, Miller KD, Jemal A. Cancer statistics, 2019. CA Cancer J Clin. 2019; 69:7–34.</p>
            <p>4. Okazaki R. [Vitamin D and cancer]. Clin Calcium. 2014; 24:1193–99.</p>
            <p>5. Dunn JA, Jefferson K, MacDonald D, Iqbal G, Bland R. Low serum 25-hydroxyvitamin D is associated with increased bladder cancer risk...</p>
            <p className="text-gray-400 italic mt-4">... [Περισσότερες πηγές διαθέσιμες στο πρωτότυπο άρθρο]</p>
          </div>
        </div>
      </div>

      {/* Article Footer */}
      <div className="px-6 md:px-10 py-8 mt-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Share Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Μοιραστείτε:</span>
            <motion.button 
              className="p-2 bg-gray-100 hover:bg-[#1DA1F2] text-gray-500 hover:text-white rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-4 h-4" />
            </motion.button>
            <motion.button 
              className="p-2 bg-gray-100 hover:bg-[#4267B2] text-gray-500 hover:text-white rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-4 h-4" />
            </motion.button>
          </div>
          
          {/* Author Info */}
          <div className="text-sm text-gray-500 italic">
            Αναρτήθηκε από <Link href="#" className="font-medium transition-colors hover:opacity-70" style={{ color: '#0c06f7' }}>Katerina Mistrioti</Link> στις 2:57 μ.μ.
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 md:px-10 py-6 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm">
          <Link 
            href="#" 
            className="flex items-center gap-2 font-medium transition-colors hover:opacity-70"
            style={{ color: '#0c06f7' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Νεότερη ανάρτηση
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:opacity-70 transition-colors"
            style={{ color: '#0c06f7' }}
          >
            <Home className="w-4 h-4" />
            Αρχική σελίδα
          </Link>
          <Link 
            href="#" 
            className="flex items-center gap-2 font-medium transition-colors hover:opacity-70"
            style={{ color: '#0c06f7' }}
          >
            Παλαιότερες αναρτήσεις
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default MainArticle;
