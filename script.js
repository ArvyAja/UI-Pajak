/* ========================================
   TaxPro Dashboard - Charts & Interactivity
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initNavigation();
    initCalendar();
});

/* Initialize Charts */
function initCharts() {
    initPendapatanLabaChart();
    initKomposisiChart();
    initTrenChart();
    initPerbandinganChart();
}

/* Chart 1: Pendapatan vs Laba Bersih (Bar Chart) */
function initPendapatanLabaChart() {
    const ctx = document.getElementById('pendapatanLabaChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nov 2024', 'Des 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [90, 95, 102, 108, 118, 126],
                    backgroundColor: '#3B82F6',
                    borderRadius: 4,
                    barPercentage: 0.6,
                    categoryPercentage: 0.7
                },
                {
                    label: 'Laba Bersih',
                    data: [58, 62, 66, 71, 78, 82],
                    backgroundColor: '#10B981',
                    borderRadius: 4,
                    barPercentage: 0.6,
                    categoryPercentage: 0.7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleFont: { family: 'Inter', size: 12 },
                    bodyFont: { family: 'Inter', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(ctx) {
                            return ctx.dataset.label + ': Rp ' + ctx.parsed.y + ' jt';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 11 }, color: '#94A3B8' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#F1F5F9' },
                    ticks: {
                        font: { family: 'Inter', size: 11 },
                        color: '#94A3B8',
                        callback: function(val) { return val + ' jt'; }
                    }
                }
            }
        }
    });
}

/* Chart 2: Komposisi Pendapatan (Donut Chart) */
function initKomposisiChart() {
    const ctx = document.getElementById('komposisiChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Pelaporan SPT', 'Konsultasi Pajak', 'Perencanaan Pajak', 'Audit Pajak', 'Lainnya'],
            datasets: [{
                data: [32, 24, 18, 14, 12],
                backgroundColor: ['#6366F1', '#3B82F6', '#8B5CF6', '#F59E0B', '#94A3B8'],
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleFont: { family: 'Inter', size: 12 },
                    bodyFont: { family: 'Inter', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(ctx) {
                            return ctx.label + ': ' + ctx.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

/* Chart 3: Tren Pendapatan & Laba Bersih (Line Chart) */
function initTrenChart() {
    const ctx = document.getElementById('trenChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des', 'Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [85, 88, 92, 95, 98, 102, 105, 110, 115, 118, 122, 126],
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointBackgroundColor: '#3B82F6',
                    borderWidth: 2
                },
                {
                    label: 'Laba Bersih',
                    data: [52, 55, 58, 60, 63, 66, 68, 72, 75, 78, 80, 82],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointBackgroundColor: '#10B981',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleFont: { family: 'Inter', size: 12 },
                    bodyFont: { family: 'Inter', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(ctx) {
                            return ctx.dataset.label + ': Rp ' + ctx.parsed.y + ' jt';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 11 }, color: '#94A3B8' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#F1F5F9' },
                    ticks: {
                        font: { family: 'Inter', size: 11 },
                        color: '#94A3B8',
                        callback: function(val) { return val + ' jt'; }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

/* Chart 4: Perbandingan Pendapatan vs Pengeluaran (Bar Chart) */
function initPerbandinganChart() {
    const ctx = document.getElementById('perbandinganChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nov 2024', 'Des 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025'],
            datasets: [
                {
                    label: 'Pendapatan',
                    data: [90, 95, 102, 108, 118, 126],
                    backgroundColor: '#3B82F6',
                    borderRadius: 4,
                    barPercentage: 0.5,
                    categoryPercentage: 0.7
                },
                {
                    label: 'Pengeluaran',
                    data: [32, 35, 38, 40, 42, 43],
                    backgroundColor: '#E2E8F0',
                    borderRadius: 4,
                    barPercentage: 0.5,
                    categoryPercentage: 0.7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleFont: { family: 'Inter', size: 12 },
                    bodyFont: { family: 'Inter', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(ctx) {
                            return ctx.dataset.label + ': Rp ' + ctx.parsed.y + ' jt';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 11 }, color: '#94A3B8' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#F1F5F9' },
                    ticks: {
                        font: { family: 'Inter', size: 11 },
                        color: '#94A3B8',
                        callback: function(val) { return val + ' jt'; }
                    }
                }
            }
        }
    });
}

/* Navigation */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only prevent default for links with href="#"
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Keuangan section toggle
    const sectionTitles = document.querySelectorAll('.nav-section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.parentElement;
            section.classList.toggle('collapsed');
        });
    });
}

/* Toggle Submenu */
function toggleSubmenu(element) {
    const section = element.parentElement;
    section.classList.toggle('collapsed');
}

/* Calendar */
function initCalendar() {
    const calDays = document.querySelectorAll('.cal-day:not(.empty):not(.today)');
    calDays.forEach(day => {
        day.addEventListener('click', function() {
            document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

/* Notification Bell */
document.querySelector('.notification-bell')?.addEventListener('click', function() {
    alert('Notifikasi:\n1. SPT Masa PPN - PT Maju Jaya (2 jam lalu)\n2. Invoice #INV-0048 (4 jam lalu)\n3. Konsultasi Pajak - CV Sejahtera Abadi (6 jam lalu)');
});
