'use client';

import { use, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import {
  HiArrowLeft,
  HiStar,
  HiOutlineDocumentText,
  HiOutlineCalendar,
} from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { HiOutlineChatAlt } from 'react-icons/hi';

// 1. استيراد مكتبات الـ Slider و Lightbox
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

export default function ProofPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = use(params);
  const type = searchParams.get('type');

  // 2. إضافة State للتحكم في فتح وإغلاق الـ Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  let item: any = null;

  if (type === 'exp') {
    item = portfolioData.experience.find((e) => e.id === id);
  } else if (type === 'edu') {
    item = portfolioData.education.find((e) => e.id === id);
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>Proof not found.</p>
      </div>
    );
  }

  const title = item.role || item.degree;
  const subtitle = item.company || item.major;
  const proofData = item.proofData;

  // دالة لفتح الصورة بالحجم الكامل
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* زر العودة */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-cyan-300 transition-colors group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Qualifications</span>
        </motion.button>

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-lg text-slate-400">{subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mt-4 rounded-full"></div>
        </motion.div>

        {/* قسم البيانات التحليلية (Data Visualization) */}
        {proofData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 space-y-8"
          >
            {/* 1. التقييم العام */}
            {proofData.overallScore && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-cyan-500/10 rounded-xl text-cyan-400">
                    <HiStar size={32} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">
                      Overall Instructor Rating
                    </p>
                    <h2 className="text-4xl font-bold text-white">
                      {proofData.overallScore.value}{' '}
                      <span className="text-xl text-slate-500">/ 5</span>
                    </h2>
                  </div>
                </div>
                <div className="h-12 w-px bg-slate-800 hidden md:block"></div>
                <div className="text-center md:text-left">
                  <p className="text-slate-400 text-sm">Total Responses</p>
                  <h3 className="text-2xl font-bold text-white">
                    {proofData.overallScore.totalResponses.toLocaleString()}
                  </h3>
                </div>
              </div>
            )}

            {/* 2. توزيع النجوم */}
            {proofData.starDistribution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proofData.starDistribution.map((star: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="flex gap-1 text-yellow-400">
                      {Array(star.stars)
                        .fill(0)
                        .map((_, i) => (
                          <HiStar key={i} size={16} />
                        ))}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full"
                          style={{
                            width: `${(star.count / proofData.overallScore.totalResponses) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-white">{star.count}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 3. تفاصيل الجلسات */}
            {proofData.sessionHighlights &&
              proofData.sessionHighlights.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 flex items-center gap-2 bg-slate-900/50">
                    <HiOutlineCalendar className="text-cyan-400" />
                    <h3 className="font-bold text-white">Sessions Breakdown</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-950/50 text-slate-400">
                        <tr>
                          <th className="p-4 font-medium">Session</th>
                          <th className="p-4 font-medium">Group</th>
                          <th className="p-4 font-medium">Date</th>
                          <th className="p-4 font-medium text-center">
                            Rating
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {proofData.sessionHighlights.map(
                          (session: any, idx: number) => (
                            <tr
                              key={idx}
                              className="hover:bg-slate-800/20 transition-colors"
                            >
                              <td className="p-4 font-medium text-white">
                                {session.session}
                              </td>
                              <td className="p-4 text-slate-400 font-mono text-xs">
                                {session.group}
                              </td>
                              <td className="p-4 text-slate-400">
                                {session.date}
                              </td>
                              <td className="p-4 text-center">
                                <span className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs">
                                  {session.rating} ★
                                </span>
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            {/* 4. تفاصيل الأسئلة */}
            {proofData.questionBreakdown &&
              proofData.questionBreakdown.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800 flex items-center gap-2 bg-slate-900/50">
                    <HiOutlineChatAlt className="text-cyan-400" />
                    <h3 className="font-bold text-white">
                      Per Question Breakdown
                    </h3>
                  </div>
                  <div className="p-4 grid gap-3">
                    {proofData.questionBreakdown.map((q: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center text-sm border-b border-slate-800/50 pb-2 last:border-0"
                      >
                        <span className="text-slate-300">{q.question}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-500 text-xs">
                            {q.responses} responses
                          </span>
                          <span className="font-bold text-cyan-400">
                            {q.rating}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </motion.div>
        )}

        {/* قسم الصور (Slider + Lightbox) */}
        {item.proofImages && item.proofImages.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <HiOutlineDocumentText className="text-cyan-400" />
              Original Documents
            </h3>

            {/* الـ Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 }, // شاشتين في الموبايل وما فوق
              }}
              className="rounded-2xl overflow-hidden pb-8" // padding for pagination
            >
              {item.proofImages.map((imgSrc: string, index: number) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-900 h-[350px] md:h-[400px]"
                  >
                    <Image
                      src={imgSrc}
                      alt={`Proof ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Overlay للتفاعل */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        Click to View
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* الـ Lightbox (عرض الصورة بالكامل) */}
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={item.proofImages.map((src: string) => ({ src }))}
              // إعدادات اختيارية للستايل
              styles={{
                container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
              }}
            />
          </div>
        )}

        {/* رسالة في حال عدم وجود بيانات */}
        {(!item.proofImages || item.proofImages.length === 0) && !proofData && (
          <div className="text-center py-20 border border-dashed border-slate-700 rounded-xl">
            <p className="text-slate-500">
              No proof data available for this item yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
